import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore, getDocs, collection, addDoc, query, where, doc, deleteDoc } from "firebase/firestore";




import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyBgtUdYv8FCTozRGHkEpFKJOEsqqEFX4hQ",

    authDomain: "convite-renata-gustavo-8ba6b.firebaseapp.com",

    projectId: "convite-renata-gustavo-8ba6b",

    storageBucket: "convite-renata-gustavo-8ba6b.appspot.com",

    messagingSenderId: "42631460753",

    appId: "1:42631460753:web:b9b12bfdf6b344f3a38c30",

    measurementId: "G-0H50SMRJWH"

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

const analytics = getAnalytics(app);
if (analytics) console.log('ok')

createApp(App).use(router).mount('#app')