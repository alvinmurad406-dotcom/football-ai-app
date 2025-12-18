import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2ksfplqfMdO952A7NYyCEQztxOoRzyPo",
  authDomain: "football-ai-app-96098.firebaseapp.com",
  projectId: "football-ai-app-96098",
  storageBucket: "football-ai-app-96098.firebasestorage.app",
  messagingSenderId: "561502464156",
  appId: "1:561502464156:web:4b4618d7ab7357c2dfe559"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
