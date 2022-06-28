// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_pCLuaHO1c7ANiUvdvDS2Le5fEEcK6vg",
  authDomain: "todo-dc0f9.firebaseapp.com",
  projectId: "todo-dc0f9",
  storageBucket: "todo-dc0f9.appspot.com",
  messagingSenderId: "137911467445",
  appId: "1:137911467445:web:01a7e980ca9d75229e2dfc"
};

export default class Fire {
    constructor(callback) { 
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null);
            }
            else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error)
                })
            }
        })
    }

    get ref() {
        return firebase.firestore().collection('lists');
    }

    getLists(callback) {
        let ref = this.ref.orderBy("name");
        this.unsubscribe = ref.onSnapshot(snapshot => {
            let lists = [];
            snapshot.forEach(doc => {
                lists.push({id: doc.id, ...doc.data()})
            } )
        callback(lists);
        }, function(error) {
            callback(error);
        });
    }

    addList(list) {
        this.ref.add(list);
    }

    deleteList(list) {
        this.ref.doc(list.id).delete();
    }

    updateList(list) {
        this.ref.doc(list.id).update(list);
    }

    detach() {
        this.unsubscribe();
    }
}