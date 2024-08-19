import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function (event) {
  var config = useRuntimeConfig(event);
  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,

    authDomain: config.FIREBASE_AUTH_DOMAIN,

    projectId: config.FIREBASE_PROJECT_ID,

    storageBucket: config.FIREBASE_STORAGE_BUCKET,

    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,

    appId: config.FIREBASE_APP_ID,

    measurementId: config.FIREBASE_MEASUREMENT_ID,
  };

  console.log(firebaseConfig);

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return { db };
}
