import React from 'react';
import { Button, View } from 'react-native';
import { useLinkTo } from '@react-navigation/native';

export default function Pebble() {
    const linkTo = useLinkTo();

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Button
                title="Send New Pebble"
                onPress={() => linkTo('/Send')}
            />
        </View>
    );
}