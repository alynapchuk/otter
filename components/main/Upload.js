import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Upload({ navigation }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        setImage(data.uri);
    };

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <Button
                title="Select Image"
                onPress={pickImage}
            />
            {image &&
                <>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    <Button
                        title="Select ->"
                        onPress={() => navigation.navigate('Save', { image })}
                    /></>}
        </View>
    );
}