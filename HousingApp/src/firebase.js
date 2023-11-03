import { initializeApp } from 'firebase/app'
import { getFirestore, doc, addDoc, setDoc, getDocs, getDoc, updateDoc, collection, serverTimestamp, query, where } from "firebase/firestore"
import { getStorage, ref, listAll, getDownloadURL, deleteObject } from "firebase/storage"
// import { signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth =  getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);

export const GetAuthUser = () => {

    try {
        const auth = getAuth();
        const user = auth.currentUser;
        // debugger;
        // await onAuthStateChanged(auth, (user) => {
        if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        
        return true
        // ...
        } else {
        // User is signed out
        // ...
        return false
        
        };

    }
    catch (e) {
        const errorModel = {
            code: e?.code ? e.code.toString() : null,
            name: e?.name ? e.name.toString() : null,
            stack: e?.stack ? e.stack.toString() : null,
            message: e?.message ? e?.message.toString() : null,
            timestamp: serverTimestamp()
        }
        //write error
        WriteDoc(errorModel, "ErrorLog");
    }
}

export const WriteDoc = async (writeData, collectionName) => {
    // /const taskQuery = query(collection(db, "customers"), where("uid", "==", user.uid))

    try {
        //const ref = collection(db, "images")
        if (writeData && collectionName) {
            //const aa = collection(collectionName).add(writeData);
            // const paymentRef = doc(db, "users", user.uid, "orders", paymentIntent.id);
            //const ref = doc(db, "Projects", writeData.id)

            const colRef = collection(db, collectionName);
            return await addDoc(colRef, writeData);

            // await here
            //await setDoc(ref);
            // await setDoc(ref, {
            //     ...writeData
            // });
        }

    }
    catch (e) {
        const errorModel = {
            code: e?.code ? e.code.toString() : null,
            name: e?.name ? e.name.toString() : null,
            stack: e?.stack ? e.stack.toString() : null,
            message: e?.message ? e?.message.toString() : null,
            timestamp: serverTimestamp()
        }
        //write error
        await WriteDoc(errorModel, "ErrorLog");
    }
}

export const UpdateDoc = async (writeData, findId, collectionName, idPropertyName = null) => {
    try {
        if (writeData && collectionName) {
            //get id reference
            const refId = await GetDocRefId(findId, collectionName, idPropertyName);
            if (refId) {
                // const docRef = db.collection(collectionName).doc(refId); // Replace with your collection and document ID
                const docRef = doc(db, collectionName, refId); // Replace with your collection and document ID
                const update = await setDoc(docRef, writeData);
                return true;
            }

        }

        return null

    }
    catch (e) {
        const errorModel = {
            code: e?.code ? e.code.toString() : null,
            name: e?.name ? e.name.toString() : null,
            stack: e?.stack ? e.stack.toString() : null,
            message: e?.message ? e?.message.toString() : null,
            timestamp: serverTimestamp()
        }
        //write error
        await WriteDoc(errorModel, "ErrorLog");
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
            //console.log(retValue);
            return retValue;

        }

    }
    catch (e) {
        console.log(e);
        const errorModel = {
            code: e?.code ? e.code.toString() : null,
            name: e?.name ? e.name.toString() : null,
            stack: e?.stack ? e.stack.toString() : null,
            message: e?.message ? e?.message.toString() : null,
            timestamp: serverTimestamp()
        }
        //write error
        await WriteDoc(errorModel, "ErrorLog");
        return null;
    }
}

export const GetDocRefId = async (findId, collectionName, idPropertyName = null) => {

    try {
        if (findId && collectionName) {
            const colRef = collection(db, collectionName);
            const taskQuery = await query(colRef, where((idPropertyName ? idPropertyName : "id"), "==", findId));
            const querySnapshot = await getDocs(taskQuery);
            const retValue = querySnapshot.docs[0].id;
            //console.log(retValue);
            return retValue;

        }

    }
    catch (e) {
        console.log(e);
        const errorModel = {
            code: e?.code ? e.code.toString() : null,
            name: e?.name ? e.name.toString() : null,
            stack: e?.stack ? e.stack.toString() : null,
            message: e?.message ? e?.message.toString() : null,
            timestamp: serverTimestamp()
        }
        //write error
        await WriteDoc(errorModel, "ErrorLog");
        return null;
    }
}

export const GetDocByRefId = async (collectionName, refId) => {

    try {
        //const ref = collection(db, "images")
        if (refId && collectionName) {
            const docRef = doc(db, collectionName, refId);
            const docSnap = await getDoc(docRef);
            let retList = ({ id: docSnap.id, data: docSnap.data() });
            retList.data.id = retList.id;
            return retList;

        }

    }
    catch (e) {
        console.log(e);
        const errorModel = {
            code: e?.code ? e.code.toString() : null,
            name: e?.name ? e.name.toString() : null,
            stack: e?.stack ? e.stack.toString() : null,
            message: e?.message ? e?.message.toString() : null,
            timestamp: serverTimestamp()
        }
        //write error
        await WriteDoc(errorModel, "ErrorLog");
        return null;
    }
}

export const GetAllDocs = async (collectionName) => {

    try {
        //const ref = collection(db, "images")
        if (collectionName) {

            const colRef = await getDocs(collection(db, collectionName));
            let retList = colRef.docs.map(doc => ({ id: doc.id, data: doc.data() }));
            // retList.map(m => m.data.id = m.id);
            return retList
        }

    }
    catch (e) {
        WriteError(e);
        return null;
    }
}

export const WriteError = async (error) => {

    if (error) {
        const errorModel = {
            code: error?.code ? error.code.toString() : null,
            name: error?.name ? error.name.toString() : null,
            stack: error?.stack ? error.stack.toString() : null,
            message: error?.message ? error?.message.toString() : null,
            timestamp: serverTimestamp()
        }
        //write error
        await WriteDoc(errorModel, "ErrorLog");
    }

    return null;
}

export const GetStorageFolderList = async (folderPath, pageToken) => {

    try {
        //const ref = collection(db, "images")
        // folderPath = "images/projects/abc";
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
        //folderPath = "images/projects/abc";
        const result = await GetStorageFolderList(folderPath);

        const downloadPromises = result.map(async (item) => {
            const downloadUrl = await getDownloadURL(ref(storage, item.fullPath));
            {/*Galleria component of prime react use the below model so we need to return the url like this*/ }
            return {
                fileUrl: downloadUrl,
                fileName: item.fileName,
            };
        });

        const retList = await Promise.all(downloadPromises); // Wait for all downloads to complete  
        // debugger
        return retList;
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

export const DeleteStorageFolderFiles = async (folderPath) => {
    try {
        //folderPath = "images/projects/abc";
        const result = await GetStorageFolderList(folderPath);

        const deletePromises = result.map(async (item) => {
            await deleteObject(ref(storage, item.fullPath));
        });

        const retList = await Promise.all(deletePromises); // Wait for all downloads to complete  
        return true;
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

export const DeleteFileIfNotExist = async (folderPath, fileNameList) => {
    try {
        //folderPath = "images/projects/abc";
        const result = await GetStorageFolderList(folderPath);

        const deletePromises = result.map(async (item) => {
            if (!fileNameList.includes(item.fileName)) {
                await deleteObject(ref(storage, item.fullPath));
            }
        });

        const retList = await Promise.all(deletePromises); // Wait for all downloads to complete  
        return true;
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



// export const AuthenticateUser = async (email,password) => {
//     try {
//         const auth = getAuth(app);
//         // const user = await signInWithEmailAndPassword(
//         //     auth,
//         //     email,
//         //     password
//         //   );

//         await signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             debugger;
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });

//     } catch (e) {
//         console.log(e);
//         WriteDoc(e, "ErrorLog");
//         return null;
//     }
// };

