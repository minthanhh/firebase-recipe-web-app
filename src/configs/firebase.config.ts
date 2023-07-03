import { initializeApp } from 'firebase/app'

const configs = {
    apiKey: "AIzaSyAvta7k7i2QFoGatNhs6MRxznNmCxkWsU0",
    authDomain: "fir-recipe-e512a.firebaseapp.com",
    projectId: "fir-recipe-e512a",
    storageBucket: "fir-recipe-e512a.appspot.com",
    messagingSenderId: "665654768330",
    appId: "1:665654768330:web:349cd1e9ef51d1e9fefa33",
    measurementId: "G-66LMMNSPBL"
};

const app = initializeApp(configs)

export default app