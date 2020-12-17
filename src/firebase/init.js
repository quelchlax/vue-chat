import firebase from 'firebase';
import 'firebase/firestore';

var config = {
    // config
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore();
