// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPawIRFCP3QEZbzkFNN56bMNMUzspJexQ",
  authDomain: "independent-service-prov-7ff6e.firebaseapp.com",
  projectId: "independent-service-prov-7ff6e",
  storageBucket: "independent-service-prov-7ff6e.appspot.com",
  messagingSenderId: "967957610924",
  appId: "1:967957610924:web:7f5bab8f30f97675d1ba09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=  getAuth(app)
export default auth;