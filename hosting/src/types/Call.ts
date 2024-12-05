
import type { UserRoom } from "./firebase/room";

export interface Call {
    //call: MediaConnection;
    user: UserRoom | null;
    //connection?: DataConnection | null;
}