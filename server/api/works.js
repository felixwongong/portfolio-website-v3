import { collection, getDocs } from "firebase/firestore";
import useFirebase from "~/composables/useFirebase";

export default defineEventHandler(async (event) => {
  const { db } = useFirebase(event);

  const snapshots = await getDocs(collection(db, "Work"));

  var res = [];

  snapshots.forEach((doc) => {
    res.push(doc.data());
  });

  return {
    works: res,
  };
});
