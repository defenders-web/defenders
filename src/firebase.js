import { initializeApp } from "firebase/app";
import { getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut
 } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyA4m8h4pgmSqs0cR0nfoGJGA_cbPQpm04c",
  authDomain: "cybersecurity-awareness-efeb4.firebaseapp.com",
  projectId: "cybersecurity-awareness-efeb4",
  storageBucket: "cybersecurity-awareness-efeb4.firebasestorage.app",
  messagingSenderId: "977026834027",
  appId: "1:977026834027:web:779c4ac74dbf34cecb1b2e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Initialize Realtime Database

// Function to register user with username
export const registerUser = async (username, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Store username in Realtime Database
  await set(ref(database, "users/" + user.uid), {
    username: username,
    email: email
  });

  return user;
};

export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logoutUser = () => signOut(auth);
