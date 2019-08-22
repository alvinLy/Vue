import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDfE013DO5GTWyClioFxYK-lflVwSLxLjQ",
	authDomain: "vue-geo-99c4b.firebaseapp.com",
	databaseURL: "https://vue-geo-99c4b.firebaseio.com",
	projectId: "vue-geo-99c4b",
	storageBucket: "",
	messagingSenderId: "868507423127"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()