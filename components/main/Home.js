import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

function Home(props) {
  const { currentUser } = props;

  return (
    <>
      <View style={styles.container}>

        <Image
          style={styles.userImage}
          source={require('../../assets/user.png')} />

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
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
  userImage: {
    height: 150,
    width: 150,
  }
});