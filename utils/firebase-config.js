import admin from "firebase-admin";
import serviceAccountKey from "../serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
  databseURL: process.env.DATABASE_URL,
});

const db = admin.firestore();
export { admin, db };
