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
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Type Here..."
                onChangeText={(search) => searchPartner(search)} />
        </View>
        <View style={styles.input}>
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
    container: {
        backgroundColor: "white",
        justifyContent: 'space-around',
    },
    buttons: {
        backgroundColor: '#03989e',
        padding: 20,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
    input: {
        padding: 20
    }
});