// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-4YcVKrl3j55I2jTGb_3WEZkeyIrQgOw",
  authDomain: "housing-app-628b7.firebaseapp.com",
  projectId: "housing-app-628b7",
  storageBucket: "housing-app-628b7.appspot.com",
  messagingSenderId: "643342142602",
  appId: "1:643342142602:web:dc7ddf841a0871d844b173",
  measurementId: "G-FJ8F04D9BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;