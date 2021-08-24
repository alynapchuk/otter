import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useLinkTo } from '@react-navigation/native';
import { connect } from "react-redux";

function Home(props) {

  const { currentUser } = props;
  const { currentPartner } = props;
  const linkTo = useLinkTo();

  return (
    <>
      <View style={styles.container}>

        <Image
          style={styles.userImage}
          source={{ uri: currentUser.profile_picture } || require('../../assets/profile.png')} />

        <Text>Welcome to your home screen, {currentUser.name}!</Text>
        <Text>Your love language is: {currentUser.lovelanguage}</Text>
        <Text>Your otters language is:</Text>

      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttons}
          onPress={() => linkTo('/Upload Profile Picture')}>
          <Text style={styles.text}>Change Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}
          onPress={() => linkTo('/Search')}>
          <Text style={styles.text}>Find Your Otter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}
          onPress={() => linkTo('/Love Language Quiz')}>
          <Text style={styles.text}>Love Language Quiz</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  currentPartner: store.partnerState.currentPartner,
});

export default connect(mapStateToProps, null)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "white",
  },
  userImage: {
    height: 150,
    width: 150,
  },
  buttons: {
    backgroundColor: '#03989e',
    padding: 10,
    marginTop: 1,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});