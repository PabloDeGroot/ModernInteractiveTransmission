/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import admin from "firebase-admin";
import * as logger from "firebase-functions/logger";
import { onValueUpdated } from "firebase-functions/v2/database";

admin.initializeApp();

//exports.onUserStatusChanged = functions.region("europe-west2").database.ref('/status/{uid}').onUpdate(

exports.onUserStatusChanged = onValueUpdated({ ref: "status/{uid}", region: "europe-west1" },
    async (event) => {

        let eventStatus = event.data.after.val();
        let oldValue = event.data.before.val();
        logger.info("newValue", eventStatus);
        logger.info("oldValue", oldValue);
        let state = eventStatus.state as string;
        let roomID = eventStatus.roomID as string | undefined;
        let oldRoomID = oldValue.roomID as string | undefined;
        let uid = event.params.uid;
        console.log("eventStatus", eventStatus);
        if (state === "offline" || (oldRoomID != null && roomID != null && roomID !== oldRoomID)) {
            if (oldRoomID == null) { return; }
            let signalCollection = admin.firestore().collection("signal");
            let roomRef = admin.firestore().collection("room").doc(oldRoomID);
            logger.info("User " + uid + " is offline or changed room");
            let roomDoc = await roomRef.get();
            logger.info("roomDoc", roomDoc.data());
            let users = roomDoc.data()?.users as any[];
            let isApp = uid.startsWith("app_");
            let usersInRoom = 1;
            if (isApp) {
                usersInRoom = 0;
            }
            if (users != null && users.length === usersInRoom) {
                let result = await roomRef.delete();

                await signalCollection.doc(oldRoomID).delete();
                logger.info("Room deleted", result);

            } else if (!isApp) {
                let newUsers = users.filter(user => user.peerId !== uid);
                await roomRef.update({ users: newUsers });
            }
            //await signalCollection.doc(oldRoomID).collection("call").doc(uid).delete();
            await admin.firestore().recursiveDelete(signalCollection.doc(oldRoomID).collection("call").doc(uid));
            logger.info("deleted call: " + oldRoomID + "/call/" + uid);
            //await signalCollection.doc(oldRoomID).collection("answer").doc(uid).delete();
            await admin.firestore().recursiveDelete(signalCollection.doc(oldRoomID).collection("answer").doc(uid));
            let callsinans = await signalCollection.doc(oldRoomID).collection("answer").listDocuments();
            let calls = await signalCollection.doc(oldRoomID).collection("call").listDocuments();
            callsinans.forEach(async doc => {
                logger.info("doc", doc.path);
                let callee = await doc.collection("0").doc(uid).get();
                if (callee.exists) {
                    await callee.ref.delete();
                }
            });
            calls.forEach(async doc => {
                logger.info("doc", doc.path);
                let callee = await doc.collection("0").doc(uid).get();
                if (callee.exists) {
                    await callee.ref.delete();
                };
            });
        } else {
            logger.info("User " + uid + " is online");
            // create Room
            let roomDoc = await admin.firestore().doc("room/" + roomID);
            try {
                let result = await roomDoc.create({ id: roomID, name: "Room" });
                logger.info("Room created", result);

            } catch (e) {
                //logger.info("Room already exists", e);
            }


        }
    });


// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
