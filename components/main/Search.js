import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import firebase from 'firebase';
import { connect } from 'react-redux'
require('firebase/firestore');

function Search(props) {
    const [partner, setPartner] = useState([])

    const searchPartner = (search) => {
        firebase.firestore()
            .collection('users')
            .where('name', '>=', search)
            .get()
            .then((snapshot) => {
                let partner = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setPartner(partner);
                console.log("Searching for:", partner);
            })
    }

    const addPartner = () => {
        firebase.firestore()
            .collection('partners')
            .doc(firebase.auth().currentUser.uid)
            .collection('usersPartner')
            .doc(props.route.params.uid)
            .set({})
    }

    return (<>
        <TextInput
            placeholder="Type Here..."
            onChangeText={(search) => searchPartner(search)} />
        <View>
            <FlatList
                numColumns={1}
                horizontal={false}
                data={partner}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => addPartner()}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>

                )}
            />
        </View>
    </>)
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Search);

const styles = StyleSheet.create({
});