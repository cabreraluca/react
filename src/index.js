import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
initializeApp({
	apiKey: "AIzaSyBojtFUMeQammMkPree-LwTnML4aStw6BQ",
	authDomain: "keo-f421f.firebaseapp.com",
	projectId: "keo-f421f",
	storageBucket: "keo-f421f.appspot.com",
	messagingSenderId: "25514149318",
	appId: "1:25514149318:web:2bb1dd45fd1777a5a11ec7",
});
const app = initializeApp;
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
