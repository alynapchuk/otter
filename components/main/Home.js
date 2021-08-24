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

        <Text style={{ fontSize: 18, }}>{currentUser.name}</Text>
        <Text>Love Language - {currentUser.lovelanguage}</Text>

        <Image
          style={styles.userImage}
          source={require('../../assets/example.jpg')} />
        <Text style={{ fontSize: 18, }}>Alejandro Garcia</Text>
        <Text>Love Language - Quality Time</Text>

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.topButtons}
          onPress={() => linkTo('/Upload Profile Picture')}>
          <Text style={styles.text}>Change Photo</Text>
        </TouchableOpacity><TouchableOpacity style={styles.topButtons}
          onPress={() => linkTo('/Search')}>
          <Text style={styles.text}>Find Your Otter</Text>
        </TouchableOpacity></View><View>
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: "white",
  },
  userImage: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    backgroundColor: "white",
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  topButtons: {
    backgroundColor: '#03989e',
    padding: 20,
    width: '50%',
    alignItems: 'center'
  },
  buttons: {
    backgroundColor: '#03989e',
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
  }
});