import { ref, getStorage } from 'firebase/storage';
import firebase from 'firebase/compat/app';
import { getDatabase, ref as dbRef } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDM38emRtQGkP5RvpPSnqsv4C-LvFzu9sc',
  authDomain: 'portfolio-bfa38.firebaseapp.com',
  databaseURL: 'https://portfolio-bfa38-default-rtdb.firebaseio.com',
  projectId: 'portfolio-bfa38',
  storageBucket: 'portfolio-bfa38.appspot.com',
  messagingSenderId: '906012136854',
  appId: '1:906012136854:web:3e713a3026a865d97a79b7',
};

firebase.initializeApp(firebaseConfig);
export const STORAGE = getStorage();
export const STORAGE_LIST = ref(STORAGE, '/');
export const STORAGE_URL = 'gs://portfolio-bfa38.appspot.com/';
export const APP_DB = dbRef(getDatabase());
