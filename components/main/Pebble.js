import React, { useState, useEffect } from 'react';
import { Button, FlatList, View } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import { connect } from "react-redux";

import firebase from 'firebase';
require('firebase/firestore')

function Pebble(props) {

    const [pebbles, setPebbles] = useState([]);
    const linkTo = useLinkTo();

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            {/* <FlatList
                numColumns={1}
                horizontal={false}
                data={pebbles}
                renderItem={({ item }) => (
                    <Text>{item.user.pebbles}</Text>
                )}
            /> */}

            <Button
                title="Send New Pebble"
                onPress={() => linkTo('/Send')}
            />

        </View>
    );
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Pebble);