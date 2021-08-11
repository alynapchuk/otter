import firebase from "firebase";

import { USER_STATE_CHANGE } from "../constants/index";

// CALL TO TRIGGER DATABASE ACTION

export function fetchUser() {
    return ((dispatch) => {
        // MAKES CALL TO FIRESTORE
        firebase.firestore()
            .collection('user')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log(snapshot.data())
                    // SEND CALL TO REDUCER TO UPDATE STATE OF currentUser
                    dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data })
                } else {
                    console.log('Error- No snapshot')
                }
            })
    })
}