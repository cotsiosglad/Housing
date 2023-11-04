import "./App.css"
//import "./fonts/LFutura.ttf"
import Pages from "./components/pages/Pages"
import { StrictMode, useEffect, useRef, useState } from "react"
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// import firebaseConfig from "./components/firebaseConfig/firebaseconfig";
//import { getAnalytics } from "firebase/analytics";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import config from "./components/chatbot/chatconfig";
import MessageParser from "./components/chatbot/chatMessageParser";
import ActionProvider from "./components/chatbot/chatActionProvider";
//#region NIKOLAS
import useIntersectionObserver from './customHooks/useIntersectionObserver'; // Import the custom hook
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { app } from "./firebase.js";
import { initializeApp } from 'firebase/app'
// import { getFirestore, doc, setDoc, getDocs, collection, serverTimestamp } from "firebase/firestore"
import axios from "axios";
import { WriteDoc } from "./firebase";
import { Timestamp, serverTimestamp } from "firebase/firestore";

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
// const db = getFirestore(app);
// //firebase.firestore().collection('restaurants').doc(id).get();
// //firebase.firestore().collection('restaurants').add(data);
// //firebase.firestore().collection('restaurants').doc(); to create new document 
// //https://firebase.google.com/codelabs/firestore-web#8 for filering
// const Firestore = {
// 	readDocs: (...args) => {
// 		let docs = []
// 		const ref = collection(db, "images")
// 		return new Promise(async resolve => {
// 			try {
// 				const snapshots = await getDocs(ref)
// 				snapshots.forEach(doc => {
// 					const d = { ...doc.data() }
// 					docs.push(d)
// 				})
// 				console.log(docs)
// 			} catch (e) {
// 				console.log(e)
// 			}
// 		})
// 	},
// 	writeDoc: (...args) => {
// 		const [inputs, collection_name] = args
// 		return new Promise(async resolve => {
// 			// Use randomIndex to generate a random documentID everytime
// 			// We use backtick(``) to declare it as a string
// 			// This example is when you want to add images in Firestore
// 			const randomIndex = Math.floor(Math.random() * 1000000000)
// 			try {
// 				const imageRef = doc(db, 'images', `${randomIndex}`);
// 				await setDoc(imageRef, { title: inputs.title, path: inputs.path, createdAt: serverTimestamp() });
// 				resolve('new doc successfully inserted')
// 			} catch (e) {

// 			}
// 		})
// 	}
// }
const inputs = { title: "Nikolas", path: "the image/path" }
const readDoc = { id: "650291541", collection: "images" }
// const setUserData = 
// {
// 	IP : '',
// 	City: '',
// 	CountryName: ''
// }
// axios.get('https://geolocation-db.com/json/')
// 	.then(function (response) {
// 	const responseData = response.data; // Assuming response.data is an object
// 	setUserData({
// 		IP: responseData.IPv4,
// 		City: responseData.city,
// 		CountryName: responseData.country_name
// 	});
// 	console.log
// 	})
// 	.catch(function (error) {
// 	console.error(error);
// 	});

// axios.get('https://geolocation-db.com/json/')
// .then(function (response){
// 	console.log(response.data.IPv4)
// 	console.log(response.data.city)
// 	console.log(response.data.country_name)
// })
//const time = serverTimestamp();
//Firestore.writeDoc(inputs)
//Firestore.readDocs(readDoc)

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

	const [userData, setUserData] = useState({
		IP: '',
		City: '',
		CountryName: ''
	});

	// console.log(userData.City)
	// console.log(userData.IP)
	//WriteDoc(userData, usersInfo)
	// // const targetRef = useRef(null);
	// const options = {
	// 	root: null, // Use the viewport as the root
	// 	rootMargin: '0px', // Margin around the root, in pixels
	// 	threshold: 0.4, // The ratio of the target's visibility to trigger the callback
	//   };
	//   useEffect(() => {
	// 	const options = {
	// 		root: null, // Use the viewport as the root
	// 		rootMargin: '0px', // Margin around the root, in pixels
	// 		threshold: 0.4, // The ratio of the target's visibility to trigger the callback
	// 	  };

	// 	if ('IntersectionObserver' in window) {
	// 	  const observer = new IntersectionObserver(entries => {
	// 		entries.forEach(entry => {
	// 		  if (entry.isIntersecting) {
	// 			entry.target.classList.add('section-show');
	// 		  }
	// 		});
	// 	  }, options);

	// 	  const sectionElements = document.querySelectorAll('section');

	// 	  if (sectionElements.length > 0) {
	// 		sectionElements.forEach(s => observer.observe(s));
	// 	  }

	// 	  return () => {
	// 		sectionElements.forEach(s => observer.unobserve(s));
	// 	  };
	// 	}
	//   }, []);

	// useEffect(() => {

	// 	const options = {
	// 	  root: null, // Use the viewport as the root
	// 	  rootMargin: '0px', // Margin around the root, in pixels
	// 	  threshold: 0.5, // The ratio of the target's visibility to trigger the callback
	// 	};

	// 	const callback = (entries, observer) => {
	// 	  entries.forEach((entry) => {
	// 		if (entry.isIntersecting) {
	// 		  // Element is in the viewport
	// 		  console.log('Element is in the viewport');
	// 		  // You can perform actions here, like adding a class or triggering animations
	// 		  entry.target.classList.add('section-show');
	// 		} else {
	// 		  // Element is out of the viewport
	// 		  console.log('Element is out of the viewport');
	// 		  // You can perform actions here, like removing a class or resetting animations
	// 		}
	// 	  });
	// 	};

	// 	const observer = new IntersectionObserver(callback, options);

	// 	if (targetRef.current) {
	// 	  observer.observe(targetRef.current);
	// 	}

	// 	return () => {
	// 	  if (targetRef.current) {
	// 		observer.unobserve(targetRef.current);
	// 	  }
	// 	};
	//   }, []);

	// Insert Dummy Data for testing
	// const today = new Date()
	// const dayandtime= today.toString()
	// const model = {
	// 	IP: "10.10.152.1",
	// 	City: "Nicosia",
	// 	CountryName: "Nicosia",
	// 	DayTime: dayandtime
	// }
	// WriteDoc(model, "VisitorsInfo")
	
	// Define the options for the IntersectionObserver
	const options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.4,
	};
	let triggerPromise = false
	// Use the custom hook in your component
	//useIntersectionObserver(options); 
	useEffect(() => {
		let model = {
			IP: "",
			City: "",
			CountryName: "",
			//Date: Timestamp
		}
		AOS.init();
		const result = axios.get('https://geolocation-db.com/json/');
		Promise.all([result]).then((response) => {
		// debugger
		const responseData = response[0].data;
		const today = new Date()
		const dayandtime= today.toString()
		//console.log(dayandtime)
		if (!triggerPromise)
		{
			model = {
				IP: responseData.IPv4,
				City: responseData.city,
				CountryName: responseData.country_name,
				DayTime: dayandtime
			}
			triggerPromise = true
			//console.log(model)
			//Uncomment below to insert user's IP in Firebase
			//WriteDoc(model, "VisitorsInfo")
		}
		
		// setUserData({
		//   IP: responseData.IPv4,
		//   City: responseData.city,
		//   CountryName: responseData.country_name
		// });
		
		})
			.catch(function (error) {
				console.error(error);
			});

		//   .then(function (response) {
		// 	const responseData = response.data;
		// 	model = {
		// 		IP: responseData.IPv4,
		// 		City: responseData.city,
		// 		CountryName: responseData.country_name
		// 	}
		// 	console.log(model)
		// 	// setUserData({
		// 	//   IP: responseData.IPv4,
		// 	//   City: responseData.city,
		// 	//   CountryName: responseData.country_name
		// 	// });

		//   })
		//   .catch(function (error) {
		// 	console.error(error);
		//   });
		//console.log(model)
	}, [])

	return <><StrictMode><Pages /></StrictMode></>
}

export default App

