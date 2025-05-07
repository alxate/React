import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApsK7AtoCFP9ebwBHunpO9BoG_zCw44jE",
  authDomain: "react-97fb6.firebaseapp.com",
  projectId: "react-97fb6",
  storageBucket: "react-97fb6.firebasestorage.app",
  messagingSenderId: "1007236893266",
  appId: "1:1007236893266:web:ce1759ca052e604903ad8b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
