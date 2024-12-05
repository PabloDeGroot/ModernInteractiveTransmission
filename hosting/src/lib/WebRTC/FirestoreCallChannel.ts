import firebase from "firebase/compat/app";
import type { ICallChannel } from "./ICallChannel";
import type { FirebaseApp } from "firebase/app";
import { firestore } from "$lib/firebase";
import type { CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";
import { doc, collection, onSnapshot, setDoc, arrayUnion, query, deleteDoc, getDoc, getDocs } from "firebase/firestore";
import type { Unsubscribe } from "firebase/auth";


class FirestoreCallChannel /*implements ICallChannel*/ {
    roomID: string;
    //docRef: DocumentReference<DocumentData>;
    //callRef: DocumentReference<DocumentData>;
    colRef: DocumentReference<DocumentData>;
    callCollection: CollectionReference<DocumentData, DocumentData>;
    answerCollection: CollectionReference<DocumentData, DocumentData>;
    unsubscribe: Unsubscribe[];

    constructor(roomId: string) {


        this.roomID = roomId;
        this.colRef = doc(firestore, "signal", roomId);
        //this.docRef = doc(this.colRef, roomId);
        this.callCollection = collection(this.colRef, "call");
        this.answerCollection = collection(this.colRef, "answer");
        this.unsubscribe = [onSnapshot(this.callCollection, (doc) => {
            doc.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("Signaler: Emitting onCall", change.doc.id);
                    this.onCall?.(change.doc.id);
                }
            });
        })];

    }
    awnser = (caller: string, callee: string) => {
        let awnsRef = doc(this.answerCollection, caller.toString(), "0", callee.toString());
        setDoc(awnsRef, {});
        let callRef = doc(this.callCollection, caller.toString(),"0", callee.toString());
        this.onConnection?.(callRef, awnsRef);

    };
    call = (caller: string)  => {
        let docRef = doc(this.callCollection, caller.toString());
        setDoc(docRef, {});
        let answerRef = collection(this.answerCollection, caller.toString(), "0");
        let un = onSnapshot(answerRef, (d) => {
            d.docChanges().forEach((change) => {
                if (change.type === "added") {
                    console.log("Signaler: Emitting onAnswer", change.doc.id);
                    let a = doc(this.callCollection, caller.toString(),"0", change.doc.id.toString());
                    this.onConnection?.(change.doc.ref, a);
                }
            });
        });
        this.unsubscribe.push(un);
        return docRef;

    };
    close = async (id: string) => {
        // let docRef = doc(this.callCollection, id.toString());
        // deleteDoc(docRef);
        // let answerRef = collection(this.answerCollection, id.toString(), "0");
        // let query = await getDocs(answerRef);
        // query.forEach(async (doc) => {
        //     console.log("deleting", doc.id);
        //     await deleteDoc(doc.ref);
        // });
        // //deleteDoc(doc(this.answerCollection, id.toString()));

        this.unsubscribe.forEach((un) => un());


    };

    onCall?: ((id: string) => void);
    onConnection?: (read: DocumentReference<DocumentData>, write: DocumentReference<DocumentData>) => void;

}
export { FirestoreCallChannel };