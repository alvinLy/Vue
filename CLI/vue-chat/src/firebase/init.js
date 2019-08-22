import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAQhym9wI-jNNGVSn9LSy92gm_XWsm99nI",
	authDomain: "vue-chat-9d21c.firebaseapp.com",
	databaseURL: "https://vue-chat-9d21c.firebaseio.com",
	projectId: "vue-chat-9d21c",
	storageBucket: "vue-chat-9d21c.appspot.com",
	messagingSenderId: "41970779291"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()