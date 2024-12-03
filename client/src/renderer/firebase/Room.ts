import { docStore, collectionStore } from "sveltefire";
import { firestore } from "./firebase";
import { arrayRemove, arrayUnion, setDoc, type DocumentData, type DocumentReference } from "firebase/firestore";
export default function GetRoom(id: string) { return docStore<Room>(firestore, 'room/' + id) };
export const RoomCollection = collectionStore<Room>(firestore, 'room');

export interface Room{
    id: string,
    name: string,
    users: UserRoom[],
    //messages: Message[]

}

export interface UserRoom{
    username: string,
    profilePic: string,
    peerId: string,
    status: "streaming" | "streaming_with_app" | "idle" | "dialing" 
}

export function CreateRoom(ref: DocumentReference<Room> | null) {
    if (!ref) {
        throw new Error("DocumentReference is null");
    }
    return setDoc(ref, {
        name: "New Room",
        users: [] as UserRoom[],
        id: ref.id
    });
}
export function AddUser(ref: DocumentReference<Room> | null, user: UserRoom) {
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
export function RemoveUser(ref: DocumentReference<Room> | null, user: UserRoom) {
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
