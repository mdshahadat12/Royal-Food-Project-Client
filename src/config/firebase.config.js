import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
console.log(import.meta.env.VITE_APIKEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDVZi8goux1IRKh-5KEssTYw5FRVHWASEI",
//   authDomain: "royal-food-c639a.firebaseapp.com",
//   projectId: "royal-food-c639a",
//   storageBucket: "royal-food-c639a.appspot.com",
//   messagingSenderId: "352724907073",
//   appId: "1:352724907073:web:987786175766eb867d82c0"
// };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(firebaseConfig);