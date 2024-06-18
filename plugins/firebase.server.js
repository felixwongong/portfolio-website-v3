// plugins/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


export default defineNuxtPlugin(nuxtApp => {

  var config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: config.FIREBASE_AUTH_DOMAIN,
    projectId: config.FIREBASE_PROJECT_ID,
    storageBucket: config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
    appId: config.FIREBASE_APP_ID
  }

  const firebaseApp = initializeApp(firebaseConfig)

  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)

  nuxtApp.provide("auth", auth);
  nuxtApp.provide("firestore", firestore);
  nuxtApp.provide("storage", storage);
})
