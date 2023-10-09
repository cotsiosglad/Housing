import { initializeApp } from 'firebase/app'
import { getFirestore, doc, addDoc, setDoc, getDocs, collection, serverTimestamp, query, where } from "firebase/firestore"
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"
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
export const WriteDoc = async (writeData, collectionName) => {
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
        WriteDoc(e, "ErrorLog");
    }
}


export const GetDocById = async (findId, collectionName, idPropertyName = null) => {

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
        WriteDoc(e, "ErrorLog");
        return null;
    }
}

export const GetAllDocs = async (collectionName) => {

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
        WriteDoc(e, "ErrorLog");
        return null;
    }
}

export const GetStorageFolderList = async (folderPath, pageToken) => {

    try {
        //const ref = collection(db, "images")
        folderPath = "images/projects/abc";
        const listRef = ref(storage, folderPath);
        const getItemList = await listAll(listRef);

        if (getItemList) {
            // return getItemList.items.map(m => (m.storage.host + "/" + m.bucket + "/" + m.fullPath));
            return getItemList.items.map(m => ({ fullPath: m.fullPath, fileName: m.name }));

        }
        else return [];
        // await listAll(listRef)
        //     .then((res) => {
        //         res.prefixes.forEach((folderRef) => {
        //             // All the prefixes under listRef.
        //             // You may call listAll() recursively on them.
        //         });
        //         res.items.forEach((itemRef) => {
        //             // All the items under listRef.
        //             console.log(itemRef);
        //         });
        //     }).catch((error) => {
        //         // Uh-oh, an error occurred!
        //     });

    }
    catch (e) {
        console.log(e);
        //write error
        WriteDoc(e, "ErrorLog");
        return null;
    }
}

// export const DownloadStorageFile = async (folderPath) => {

//     try {
//         //const ref = collection(db, "images")
//         let retList = [];
//         folderPath = "images/projects/abc";
//         var list = await getStorageFolderList(folderPath).then((result) => {
//             result.forEach(async (item) => {

//                 const getD = await getDownloadURL(ref(storage, item.fullPath))
//                 let aa = 0;
//                 // .then((result) => {
//                 //     retList.push(result);
//                 // })
//             })
//             return retList;
//         });
//         // await listAll(listRef)
//         //     .then((res) => {
//         //         res.prefixes.forEach((folderRef) => {
//         //             // All the prefixes under listRef.
//         //             // You may call listAll() recursively on them.
//         //         });
//         //         res.items.forEach((itemRef) => {
//         //             // All the items under listRef.
//         //             console.log(itemRef);
//         //         });
//         //     }).catch((error) => {
//         //         // Uh-oh, an error occurred!
//         //     });

//     }
//     catch (e) {
//         console.log(e);
//         //write error
//         WriteDoc(e, "ErrorLog");
//         return null;
//     }
// }

export const GetStorageFolderFiles = async (folderPath) => {
    try {
        folderPath = "images/projects/abc";
        const result = await GetStorageFolderList(folderPath);

        const downloadPromises = result.map(async (item) => {
            const downloadUrl = await getDownloadURL(ref(storage, item.fullPath));
            {/*Galleria component of prime react use the below model so we need to return the url like this*/ }
            return {
                itemImageSrc: downloadUrl,
                thumbnailImageSrc: downloadUrl,
                alt: ''
            };
        });

        const retList = await Promise.all(downloadPromises); // Wait for all downloads to complete

        // This can be downloaded directly:
        // const xhr = new XMLHttpRequest();
        // xhr.responseType = 'blob';
        // xhr.onload = (event) => {
        //     const blob = xhr.response;
        // };
        // xhr.open('GET', url);
        // xhr.send();
        // return retList;
    } catch (e) {
        console.log(e);
        WriteDoc(e, "ErrorLog");
        return null;
    }
};