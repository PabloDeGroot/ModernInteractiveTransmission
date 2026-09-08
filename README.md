# ModernInteractiveTransmission

Low-latency screen sharing with **interactive** remote control: a Windows host streams its
desktop over WebRTC, and viewers in a browser can click, type, scroll and draw straight onto
the shared screen.

The stack is deliberately native where it matters — desktop capture, H.264 encoding and the
WebRTC transport all live in Rust, exposed to Electron as a Node addon — so frames go from
the GPU to the wire without a round trip through JavaScript.

---

## How it works

```
┌──────────────────────────────┐          ┌───────────────┐          ┌────────────────────────┐
│  Host  (Electron, Windows)   │          │   Firebase    │          │  Viewer  (browser)     │
│                              │          │               │          │                        │
│  DXGI Desktop Duplication    │          │  Firestore    │          │  SvelteKit + Skeleton  │
│      ↓ D3D11 texture         │          │   signaling   │          │  <video> + overlay     │
│  NVENC  /  OpenH264          │◀── SDP ─▶│   rooms       │◀── SDP ─▶│  toolbar:              │
│  WASAPI loopback → Opus      │   ICE    │  RTDB         │   ICE    │   click · draw · image │
│      ↓                       │          │   presence    │          │      ↓ data channel    │
│  webrtc-rs  ──── media ──────┼──────────┴───────────────┴──────────┼──▶  input events       │
│  input injection ◀───────────┼──────────────  data channel  ───────┘                        │
└──────────────────────────────┘                                     └────────────────────────┘
```

1. The host captures the primary display with **DXGI Desktop Duplication**, keeping frames as
   D3D11 textures.
2. Frames are encoded with **NVENC** on NVIDIA hardware, falling back to **OpenH264** in
   software. System audio is captured via **WASAPI** loopback and encoded as **Opus**.
3. Peers exchange SDP and ICE through **Firestore** (`signal/{roomId}`); presence lives in the
   **Realtime Database** (`status/{uid}`) and a Cloud Function reaps rooms and stale signaling
   documents when a user goes offline. Relay uses **Cloudflare TURN**.
4. Viewers open `/{roomId}` in the web app, sign in with Firebase Auth, and see the stream.
   Toolbar actions travel back over a WebRTC **data channel**.
5. On the host, those events are replayed as real mouse and keyboard input, while a
   transparent always-on-top Electron overlay draws remote cursors, strokes and pasted images
   on top of the real desktop.

## Repository layout

| Path | What it is |
| --- | --- |
| `client/` | The host app — Electron + Svelte 5. Overlay window, input injection, signaling glue. |
| `hosting/` | The viewer — SvelteKit + Tailwind + Skeleton, deployed to Firebase Hosting. |
| `functions/` | Cloud Functions: presence-driven room and signaling cleanup. |
| `desktop-streaming-napi/` | Rust workspace, the current streaming engine. |
| `desktop-streaming-napi/stream-napi/` | The napi-rs Node addon: capture, encode, WebRTC. |
| `desktop-streaming-napi/webrtc-helper/` | webrtc-rs wrapper — H.264/H.265/AV1 codecs, TWCC bandwidth estimation. |
| `desktop-streaming-napi/nvenc-rs/` | NVENC bindings (`nvenc`, `nvenc-sys`). |
| `rust_modules/` | Earlier iteration of the native side (`webrtc_rust_client`), kept for reference. |
| `firestore.rules`, `firebase.json` | Firebase project configuration. |

`webrtc-helper`, `nvenc-rs` and `nvenc-sys-main` are vendored third-party crates and carry
their own MIT/Apache-2.0 licenses.

## Requirements

The **host** is Windows-only — it depends on DXGI Desktop Duplication, D3D11 and WASAPI.
The **viewer** runs in any modern browser.

- Windows 10/11
- Node.js 18+ and npm
- Rust toolchain (MSVC) + the `@napi-rs/cli`
- Visual Studio Build Tools (C++), for `bindgen` and the native crates
- An NVIDIA GPU for NVENC — otherwise encoding falls back to OpenH264
- A Firebase project (Firestore, Realtime Database, Auth, Hosting, Functions)

## Getting started

### 1. Build the native addon

```bash
cd desktop-streaming-napi/stream-napi
yarn install
yarn build          # or: yarn build:debug
```

This produces the `.node` binary that `client/` consumes through its
`"stream-napi": "file:../desktop-streaming-napi/stream-napi"` dependency.

### 2. Run the host

```bash
cd client
npm install
npm run dev         # electron-vite dev
```

Packaging: `npm run build:win` (electron-builder).

### 3. Run the viewer

```bash
cd hosting
npm install
npm run dev
```

Then open the room slug the host is publishing to, e.g. `http://localhost:5173/room3`.

### 4. Deploy

```bash
firebase deploy                       # hosting + functions + rules
firebase deploy --only functions      # functions alone
```

## Configuration

Firebase web config is currently inlined in `client/src/renderer/firebase/firebase.ts`,
`client/src/main/signaling/firebase.ts` and `hosting/src/lib/firebase.ts`. Point these at your
own project to run your own deployment, and update `.firebaserc` to match.

TURN credentials are read from the environment. Copy `hosting/.env.example` to
`hosting/.env` and `client/.env.example` to `client/.env`, and fill in your Cloudflare TURN
key id, API token and static credential pair. Neither `.env` is tracked.

The room the host joins and the host's user id are hard-coded near the top of
`client/src/main/index.ts` (`room`, `user`) — parameterizing these is an open task.

## Security

A few things to be aware of before running this anywhere real:

- **`firestore.rules` is still the default open ruleset**, with an expiry date of
  2024-12-28 that has already passed. Every client request is currently denied; before
  opening it back up, write rules that scope reads and writes to room members.
- **The Cloudflare TURN API token still reaches the browser.** It now comes from
  `VITE_CLOUDFLARE_TURN_API_TOKEN` rather than a hard-coded literal, but Vite inlines `VITE_*`
  into the client bundle, so the token remains readable by anyone who loads the page. The real
  fix is to mint short-TTL credentials server-side in a Cloud Function. Until then, scope the
  token to TURN only.
- The host **injects arbitrary mouse and keyboard input** on behalf of anyone in the room.
  There is no per-user permission model — treat room ids as capability tokens and keep them
  private.
- The Electron host runs with `nodeIntegration: true` and `contextIsolation: false`, and its
  renderer is trusted implicitly. Hardening this is worth doing before distributing builds.

## Status

Working prototype, actively hacked on. Expect hard-coded values and commented-out experiments.

Git history was rewritten to purge leaked Cloudflare TURN credentials, so any clone made before
that point is incompatible — re-clone rather than pulling.
