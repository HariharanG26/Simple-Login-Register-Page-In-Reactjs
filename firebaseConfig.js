// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjWGZBw42ISj0Ip4qV_lcNQHBjUBzysJs",
  authDomain: "myapp-8dce6.firebaseapp.com",
  projectId: "myapp-8dce6",
  storageBucket: "myapp-8dce6.appspot.com",
  messagingSenderId: "880253073900",
  appId: "1:880253073900:web:0e7941e2404631dc1fa8c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
