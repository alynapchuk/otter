import React from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { useLinkTo } from '@react-navigation/native';
import { connect } from "react-redux";

function Home(props) {

  const { currentUser } = props;
  const linkTo = useLinkTo();

  console.log(currentUser)

  return (
    <>
      <View style={styles.container}>

        <Image
          style={styles.userImage}
          source={{ uri: currentUser.profile_picture } || require('../../assets/profile.png')} />

        <TouchableOpacity style={styles.buttons}
          onPress={() => linkTo('/Upload')}>
          <Text style={styles.text}>Change Photo</Text>
        </TouchableOpacity>

        <Text>Welcome to your home screen, {currentUser.name}!</Text>

      </View>
    </>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    height: 150,
    width: 150,
  },
  buttons: {
    backgroundColor: '#03989e',
    padding: 10,
    margin: 10,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});