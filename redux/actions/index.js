import { USER_PEBBLE_STATE_CHANGE, USER_STATE_CHANGE } from "../constants/index";
import firebase from "firebase";
require('firebase/firestore')

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((response) => {
                if (response.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: response.data() })
                } else {
                    console.log('Error: No response')
                }
            })
    })
}

export function fetchUserPebbles() {
    return ((dispatch) => {
        firebase.firestore()
            .collection('pebbles')
            .doc(firebase.auth().currentUser.uid)
            .collection('userPebbles')
            .orderBy('creation', 'asc')
            .get()
            .then((snapshot) => {
                let pebbles = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                dispatch({ type: USER_PEBBLE_STATE_CHANGE, pebbles })
            })
    })
}