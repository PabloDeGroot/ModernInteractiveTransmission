import firebase from "firebase/compat/app";
import type { ISignalingChannel } from "./ISignalingChannel";
import type { FirebaseApp } from "firebase/app";
import { firestore } from "$lib/firebase";
import type { CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";
import { doc, collection, onSnapshot, setDoc, arrayUnion, query, deleteDoc } from "firebase/firestore";


class FirestoreSignalingChannel implements ISignalingChannel {
    roomID: string;
    readRef: DocumentReference<DocumentData>;
    sendRef: DocumentReference<DocumentData>;
    //docRef: DocumentReference<DocumentData>;
    //callRef: DocumentReference<DocumentData>;

    constructor(roomId: string, readRef: DocumentReference<DocumentData>, sendRef: DocumentReference<DocumentData>) {

        this.roomID = roomId;
        this.readRef = readRef;
        this.sendRef = sendRef;
        onSnapshot(this.readRef, (doc) => {
            if (!doc.data()?.data) return;
            console.log("Signaler: Emitting onmessage", doc.data());
            this.onmessage?.(JSON.parse(doc.data()!.data));
        });

    }

    send(data: any): void {
        console.log("sending", data);
        let d = { data: JSON.stringify(data) };

        setDoc(this.sendRef, d);
    }
    close = async () => {
        deleteDoc(this.sendRef);
    }
    onmessage?: ((message: any) => void);

}
export { FirestoreSignalingChannel };