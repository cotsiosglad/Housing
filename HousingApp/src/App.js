import "./App.css"
import "./fonts/LFutura.ttf"
import Pages from "./components/pages/Pages"
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// import firebaseConfig from "./components/firebaseConfig/firebaseconfig";
//import { getAnalytics } from "firebase/analytics";

//#region NIKOLAS
import { initializeApp } from 'firebase/app'
import { getFirestore ,doc, setDoc,getDocs,collection,serverTimestamp} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyD-4YcVKrl3j55I2jTGb_3WEZkeyIrQgOw",
  authDomain: "housing-app-628b7.firebaseapp.com",
  projectId: "housing-app-628b7",
  storageBucket: "housing-app-628b7.appspot.com",
  messagingSenderId: "643342142602",
  appId: "1:643342142602:web:dc7ddf841a0871d844b173",
  measurementId: "G-FJ8F04D9BL"
  
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const Firestore = {
	readDocs: (...args) => {
		let docs = []
		const ref = collection(db, "images")
		return new Promise(async resolve => {
			try{
					const snapshots = await getDocs(ref)
					snapshots.forEach(doc => {
						const d = {...doc.data()}
						docs.push(d)
					})
          console.log(docs)
			} catch(e) {
					console.log(e)
			}
		})
	},
	writeDoc: (...args) => {
		const [inputs, collection_name] = args
		return new Promise(async resolve => {
			// Use randomIndex to generate a random documentID everytime
			// We use backtick(``) to declare it as a string
			// This example is when you want to add images in Firestore
			const randomIndex = Math.floor(Math.random() * 1000000000)
			try{
					const imageRef = doc(db, 'images', `${randomIndex}`);
					await setDoc(imageRef, {title: inputs.title, path: inputs.path,  createdAt: serverTimestamp() });
					resolve('new doc successfully inserted')
			} catch(e) {
			
			}
		})
	}
}
const inputs = {title:"Nikolas",path:"the image/path"}
const readDoc = {id:"650291541",collection:"images"}
const time = serverTimestamp();
//Firestore.writeDoc(inputs)
Firestore.readDocs(readDoc)

//#endregion

// const firebaseConfig = {
//   apiKey: "AIzaSyD-4YcVKrl3j55I2jTGb_3WEZkeyIrQgOw",
//   authDomain: "housing-app-628b7.firebaseapp.com",
//   projectId: "housing-app-628b7",
//   storageBucket: "housing-app-628b7.appspot.com",
//   messagingSenderId: "643342142602",
//   appId: "1:643342142602:web:dc7ddf841a0871d844b173",
//   measurementId: "G-FJ8F04D9BL"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
function App() {
  return <Pages />
}

export default App

