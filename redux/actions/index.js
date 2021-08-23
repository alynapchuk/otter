import { USER_PEBBLE_STATE_CHANGE, USER_STATE_CHANGE, USER_PARTNER_STATE_CHANGE, PARTNER_STATE_CHANGE, PARTNER_PEBBLE_STATE_CHANGE, PARTNER_PARTNER_STATE_CHANGE } from "../constants/index";
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

export function fetchPartnerID() {
    return ((dispatch) => {
        firebase.firestore()
            .collection("partners")
            .doc(firebase.auth().currentUser.uid)
            .collection("usersPartner")
            .onSnapshot((snapshot) => {
                let partnerID = snapshot.docs.map(doc => {
                    const id = doc.id;
                    return id
                })
                dispatch({ type: USER_PARTNER_STATE_CHANGE, partnerID });
                dispatch(fetchPartnerData());


                console.log(partnerID)

            })
    })
}

export function fetchPartnerData(uid) {
    return ((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    let currentPartner = snapshot.data();
                    currentPartner.uid = snapshot.id;

                    dispatch({ type: PARTNER_STATE_CHANGE, currentPartner });
                }
                else {
                    console.log('does not exist')
                }
            })
    })
}