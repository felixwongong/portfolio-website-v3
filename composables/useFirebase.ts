import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function () {
  var config = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: config.PUBLIC_FIREBASE_API_KEY,

    authDomain: config.PUBLIC_FIREBASE_AUTH_DOMAIN,

    projectId: config.PUBLIC_FIREBASE_PROJECT_ID,

    storageBucket: config.PUBLIC_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: config.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,

    appId: config.PUBLIC_FIREBASE_APP_ID,

    measurementId: config.PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return { db };
}
