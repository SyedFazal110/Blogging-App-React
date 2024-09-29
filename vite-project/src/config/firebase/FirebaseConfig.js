import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCiv_McPqdxH7-pFNcMSne6UIiLi23TiAI",
  authDomain: "blogging-app-f4bda.firebaseapp.com",
  projectId: "blogging-app-f4bda",
  storageBucket: "blogging-app-f4bda.appspot.com",
  messagingSenderId: "1041200374283",
  appId: "1:1041200374283:web:0f3946ecb0e8fb07445d0e",
  measurementId: "G-S1YPRC7QBX"
};


const app = initializeApp(firebaseConfig);
export { app };