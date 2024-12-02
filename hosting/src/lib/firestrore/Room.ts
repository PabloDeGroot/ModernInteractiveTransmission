import { docStore, collectionStore } from "sveltefire";
import type Room from "../../types/firebase/room";
import { firestore } from "../firebase";
import { arrayRemove, arrayUnion, setDoc, type DocumentData, type DocumentReference } from "firebase/firestore";
import type { UserRoom } from "../../types/firebase/room";
export default function GetRoom(id: string) { return docStore<Room>(firestore, 'room/' + id) };
export const RoomCollection = collectionStore<Room>(firestore, 'room');

export function CreateRoom(ref: DocumentReference<Room, DocumentData> | null) {
    if (!ref) {
        throw new Error("DocumentReference is null");
    }
    return setDoc(ref, {
        name: "New Room",
        users: [] as UserRoom[],
        id: ref.id
    });
}
export function AddUser(ref: DocumentReference<Room, DocumentData> | null, user: UserRoom) {
    if (ref != null) {
        return setDoc(
            ref,
            {
                users: arrayUnion(user),
            },
            { merge: true },
        );
    }
}
export function RemoveUser(ref: DocumentReference<Room, DocumentData> | null, user: UserRoom) {
    if (ref != null) {
        return setDoc(
            ref,
            {
                users: arrayRemove(user),
            },
            { merge: true },
        );
    }
}
