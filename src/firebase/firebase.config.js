// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGrnN0evt36WB4E00zzJyEBXQiuxRG_M0",
  authDomain: "chef-recipe-hunter-a3738.firebaseapp.com",
  projectId: "chef-recipe-hunter-a3738",
  storageBucket: "chef-recipe-hunter-a3738.appspot.com",
  messagingSenderId: "253601829397",
  appId: "1:253601829397:web:e6e697b8a0f7c05899341c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;