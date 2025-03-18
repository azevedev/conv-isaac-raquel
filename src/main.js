import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";



// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyACSRNUx_IjJa1sW6a_aG7fsFBqs558-2E",
  
    authDomain: "convite-isaac-raquel.firebaseapp.com",
  
    projectId: "convite-isaac-raquel",
  
    storageBucket: "convite-isaac-raquel.firebasestorage.app",
  
    messagingSenderId: "929177031263",
  
    appId: "1:929177031263:web:9677dfb646b72c7fb801ea"
  
  };
  

export const getAllLists = async function(db) {
    const citiesCol = collection(db, 'convidados');
    const citySnapshot = await getDocs(citiesCol);
    console.log('ok');
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
}

export const getAllPr = async function() {
    const q = query(collection(db, "convidados"), where("principal", "==", true));
    const convidadosPr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((documents) => {
        // documents.data() is never undefined for query documents snapshots
        console.log(documents.id, " => ", documents.data());
        convidadosPr.push({
            "id": documents.id,
            ...documents.data(),
            'convidados': []
        })
    });
    return convidadosPr;
}

export const getPr = async function(id) {
    const docRef = doc(db, "convidados", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return {
            id: id,
            ...docSnap.data(),
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }

}

export const getAllCnv = async function(id) {
    const q = query(collection(db, "convidados"),
        where("principal", "==", false), where("convidado_por", "==", id));
    const convidadosCnv = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((documents) => {
        // documents.data() is never undefined for query documents snapshots
        console.log(documents.id, " => ", documents.data());
        convidadosCnv.push({
            "id": documents.id,
            ...documents.data(),
        })
    });
    return convidadosCnv;
}

export const deleteAllCnv = async function(id) {
    const q = query(collection(db, "convidados"),
        where("principal", "==", false), where("convidado_por", "==", id));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((documents) => {
        // documents.data() is never undefined for query documents snapshots
        console.log(documents.id, " => ", documents.data());
        deleteDoc(doc(db, "convidados", documents.id));
    });

    await deleteDoc(doc(db, "convidados", id));
    return true;
}


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const sendList = async function(data) {
    const ref = await addDoc(collection(db, "convidados"), data);
    console.log("Document written with ID: ", ref.id);
    return ref.id;
}


createApp(App).use(router).mount('#app')