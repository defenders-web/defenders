import { initializeApp } from "firebase/app";
import { getAuth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut
 } from "firebase/auth";
import { getDatabase, ref, set, get, update } from "firebase/database";

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

export const fetchUsername = async (uid) => {
  if (!uid) return null;
  try {
    const userRef = ref(database, `users/${uid}/username`);
    const snapshot = await get(userRef);
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error("Error fetching username:", error);
    return null;
  }
};

export const fetchUserData = async (uid) => {
  if (!uid) return null;
  try {
    const userRef = ref(database, `users/${uid}`);
    const snapshot = await get(userRef);
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

export const updateUserProfile = async (uid, newUsername, newBio) => {
  if (!uid) return;
  try {
    await update(ref(database, `users/${uid}`), {
      username: newUsername,
      bio: newBio,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};



// Function to update username in Firebase Realtime Database
export const updateUsername = async (uid, newUsername) => {
  if (!uid) return;
  try {
    await update(ref(database, `users/${uid}`), { username: newUsername });
  } catch (error) {
    console.error("Error updating username:", error);
  }
};

export { auth, database, signOut };

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
