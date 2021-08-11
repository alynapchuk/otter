import { USER_STATE_CHANGE } from "../constants/index";
import firebase from "firebase";
require('firebase/firestore')

// CALL TO TRIGGER DATABASE ACTION

export function fetchUser() {
    return ((dispatch) => {
        // MAKES CALL TO FIRESTORE
        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((response) => {
                if (response.exists) {
                    // SEND CALL TO REDUCER TO UPDATE STATE OF currentUser
                    dispatch({ type: USER_STATE_CHANGE, currentUser: response.data() })
                } else {
                    console.log('Error: No response')
                }
            })
    })
}