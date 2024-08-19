import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default function (event) {
  var config = useRuntimeConfig(event);
  const firebaseConfig = {
    apiKey: config.public.FIREBASE_API_KEY,

    authDomain: config.public.FIREBASE_AUTH_DOMAIN,

    projectId: config.public.FIREBASE_PROJECT_ID,

    storageBucket: config.public.FIREBASE_STORAGE_BUCKET,

    messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID,

    appId: config.public.FIREBASE_APP_ID,

    measurementId: config.public.FIREBASE_MEASUREMENT_ID,
  };

  console.log(firebaseConfig);

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  return { db };
}
