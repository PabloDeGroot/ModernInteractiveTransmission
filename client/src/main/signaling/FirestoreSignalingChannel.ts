import firebase from "firebase/compat/app";
import type { FirebaseApp } from "firebase/app";
import { firestore } from "./firebase";
import type { CollectionReference, DocumentData, DocumentReference } from "firebase/firestore";
import { doc, collection, onSnapshot, setDoc, arrayUnion, query, deleteDoc } from "firebase/firestore";


class FirestoreSignalingChannel {
    roomID: string;
    readRef: DocumentReference<DocumentData>;
    sendRef: DocumentReference<DocumentData>;
    //docRef: DocumentReference<DocumentData>;
    //callRef: DocumentReference<DocumentData>;

        data: {data: string[]};
    constructor(roomId: string, readRef: DocumentReference<DocumentData>, sendRef: DocumentReference<DocumentData>) {

        this.roomID = roomId;
        this.readRef = readRef;
        this.sendRef = sendRef;
        this.data = {data: []};
        onSnapshot(this.readRef, (doc) => {
            if (!doc.data()?.data) return;
            //console.log("Signaler: Emitting onmessage", doc.data());
            // get new data
            let alldata = doc.data()!.data as string[];
            // get old data
            let oldData = this.data;
            // get the new data
            let newData = alldata.filter((d) => !oldData.data.includes(d));
            this.data = {data: alldata};
            newData.forEach(d => {
                this.onmessage?.(JSON.parse(d));                
            });
        });

    }

    send(data: any): void {
        //console.log("sending", data);

        setDoc(this.sendRef, {data: arrayUnion(JSON.stringify(data))}, {merge: true});
    }
    close = async () => {
        this.send({type: "close"});
        //deleteDoc(this.sendRef);
    }
    onmessage?: ((message: any) => void);

}
export { FirestoreSignalingChannel };