import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig: object = {
  // ENTER YOUR CONFIG HERE
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN + ".firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET + ".appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const profileCollection = collection(db, "Profile");
const createUserDoc = async (
  userId: string,
  email: string,
  userName: string
) => {
  await setDoc(doc(db, "Profile", userId), {
    name: userName,
    email: email,
    phoneNumber: "default",
  });
};

const checkForUser = async (userEmail: string) => {
  const findUser = query(profileCollection, where("email", "==", userEmail));
  const getUser = await getDocs(findUser);
  console.log("getUser: ", getUser.docs.length);
  if (getUser.docs.length > 0) {
    // console.log("User exist...");
    return true;
  } else {
    // console.log("User does not exist...");
    return null;
  }
};

const saveUserBooking = async (
  userId: string,
  userEmail: any,
  pax: number,
  type: string,
  date: string,
  time: string,
  address: string,
  saloonId: string,
  saloonName: string
) => {
  const addingBooking = await addDoc(collection(db, "Bookings"), {
    userId: userId,
    email: userEmail,
    pax: pax,
    typeOfService: type,
    dateOfAppointment: date,
    timeOfAppointment: time,
    userAddress: address,
    saloonId: saloonId,
    saloonName: saloonName,
  });
  if (addingBooking) {
    console.log("successfully add booking...");
    const theDocId = addingBooking.id;
    const docIdRef = doc(db, "Bookings", theDocId);
    const addingId = await updateDoc(docIdRef, { docId: theDocId });
    if (addingId !== null) {
      console.log("Successfully added document ID...");
    }
  } else {
    console.log("failed to add booking");
  }
};

const uploadProfileImg = async (file: any) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const storageRef = ref(storage, uid);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log("Fail to upload new profle picture...");
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    } else {
      console.log("User is not logged in...");
    }
  });
};

export {
  profileCollection,
  createUserDoc,
  db,
  saveUserBooking,
  uploadProfileImg,
  storage,
  checkForUser,
};
