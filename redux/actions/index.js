import { USER_STATE_CHANGE } from "../constants/index";
import firebase from "firebase";
require('firebase/firestore')

export function fetchUser() { // GETS USER DATA FROM FIREBASE DATABASE
    return ((dispatch) => {
        firebase.firestore()
            .collection('users') // SELECT USERS COLLECTION (BASICALLY A TABLE) FROM DATABASE
            .doc(firebase.auth().currentUser.uid) // GETS DATA FROM LOGGED IN USER BASED ON USER ID (UID)
            .get()
            .then((response) => {
                if (response.exists) {
                    dispatch({ type: USER_STATE_CHANGE, currentUser: response.data() }) // INPUTS DATA TO currentUser STATE
                } else {
                    console.log('Error: No response') // ERROR IF NO USER DATA IS AVAILABLE
                }
            })
    })
}