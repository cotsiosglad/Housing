import { initializeApp } from 'firebase/app'
import { getFirestore, doc, addDoc, setDoc, getDocs, collection, serverTimestamp, query, where } from "firebase/firestore"
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: "housing-app-628b7.firebaseapp.com",
    projectId: "housing-app-628b7",
    storageBucket: "housing-app-628b7.appspot.com",
    messagingSenderId: "643342142602",
    appId: "1:643342142602:web:dc7ddf841a0871d844b173",
    measurementId: "G-FJ8F04D9BL"

};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const writeDoc = async (writeData, collectionName) => {
    // /const taskQuery = query(collection(db, "customers"), where("uid", "==", user.uid))

    try {
        //const ref = collection(db, "images")
        if (writeData && collectionName) {
            //const aa = collection(collectionName).add(writeData);
            // const paymentRef = doc(db, "users", user.uid, "orders", paymentIntent.id);
            //const ref = doc(db, "Projects", writeData.id)

            const colRef = collection(db, collectionName);
            await addDoc(colRef, writeData);

            // await here
            //await setDoc(ref);
            // await setDoc(ref, {
            //     ...writeData
            // });
        }

    }
    catch (e) {
        console.log(e);
        //write error
        writeDoc(e, "ErrorLog");
    }
}


export const getDocById = async (findId, collectionName, idPropertyName = null) => {

    try {
        //const ref = collection(db, "images")
        if (findId && collectionName) {
            const colRef = collection(db, collectionName);
            const taskQuery = await query(colRef, where((idPropertyName ? idPropertyName : "id"), "==", findId));
            const querySnapshot = await getDocs(taskQuery);
            const retValue = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.data())
                retValue.push(doc.data());
            });
            console.log(retValue);
            return retValue;

        }

    }
    catch (e) {
        console.log(e);
        //write error
        writeDoc(e, "ErrorLog");
        return null;
    }
}

export const getAllDocs = async (collectionName) => {

    try {
        //const ref = collection(db, "images")
        if (collectionName) {

            const colRef = await collection(db, collectionName).get();

            return colRef.docs.map(doc => doc.data());
        }

    }
    catch (e) {
        console.log(e);
        //write error
        writeDoc(e, "ErrorLog");
        return null;
    }
}