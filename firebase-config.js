const firebaseConfig = {
  apiKey: "AIzaSyC6H_1I5b1G1Khhk0pzRR8O8MKkR5ATsjQ",
  authDomain: "bagaj-admin.firebaseapp.com",
  projectId: "bagaj-admin",
  storageBucket: "bagaj-admin.firebasestorage.app",
  messagingSenderId: "455114152158",
  appId: "1:455114152158:web:4d98333987dfa320290a4f"
};

// Firebase инициализаци
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Зарим browser (ялангуяа iOS Safari) дээр Auth-ийн session
// хадгалалт тогтворгүй ажилладаг тул LOCAL горимд тохируулна.
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(err => {
  console.warn("Auth persistence тохируулахад алдаа:", err);
});

// iOS Safari зэрэг зарим browser/network дээр Firestore-ийн WebChannel
// холболт бүтэлгүйтдэг тул long-polling горимыг албадан ашиглуулна.
db.settings({
  host: "firestore.googleapis.com",
  ssl: true,
  experimentalForceLongPolling: true
});

// Энэ хэрэглэгчийн site-ийн тогтмол нэвтрэх и-мэйл (хэрэглэгчид
// харагдахгүй, зөвхөн нууц үг асуудаг)
const HEREGLEGCH_EMAIL = "hereglegch@emeelt.mn";
