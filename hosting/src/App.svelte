<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  import { initializeApp } from "firebase/app";
  import { getFirestore } from 'firebase/firestore';

  import "firebase/firestore";
  import "firebase/auth";
  import "firebase/performance";
  import "firebase/analytics";
    import { getAuth } from 'firebase/auth';

  let firebaseConfig = {
  apiKey: "AIzaSyBBtp0X-mJVTRHKFBMwt2_3pxIbfhhz_ak",
  authDomain: "dreamreactfirebase.firebaseapp.com",
  projectId: "dreamreactfirebase",
  storageBucket: "dreamreactfirebase.firebasestorage.app",
  messagingSenderId: "622346676045",
  appId: "1:622346676045:web:a646ed4187bc79d7443904",
  measurementId: "G-6FNYF33DY3"
};
let app = initializeApp(firebaseConfig);
let firestore = getFirestore(app);
let auth = getAuth(app);
</script>

<main>
  {#if !firebaseConfig.projectId}
    <strong>Step 0</strong>
    Create a
    <a href="https://firebase.google.com/">Firebase Project</a>
    and paste your web config into
    <code>App.svelte</code>
    .
  {/if}
  <FirebaseApp {auth} {firestore} >
    
    <slot>
      <Doc ref={'posts/id'}  let:data let:firestore>
        <p>{data?.adsa}</p>

      </Doc>
    </slot>

    
  </FirebaseApp>
</main>

<style>

</style>
