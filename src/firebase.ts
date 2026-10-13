// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Isi dengan konfigurasi unik dari akun Firebase Console Anda
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "://firebaseapp.com",
  projectId: "proyek-anda",
  storageBucket: "proyek-anda.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:12345:web:abcde"
};

const app = initializeApp(firebaseConfig);

// Export storage agar bisa dipanggil di PrestamediaView.tsx
export const storage = getStorage(app);
