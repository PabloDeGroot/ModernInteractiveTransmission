import type { DocumentData, DocumentReference } from "firebase/firestore";

export interface ICallChannel {
    call: (id: number) => void;
    awnser: (caller: number, callee: number) => void;
    onCall?: (id: number) => void;
    onConnection?: (read: DocumentReference<DocumentData>, write: DocumentReference<DocumentData>) => void;
    close: (id: number) => void;
}