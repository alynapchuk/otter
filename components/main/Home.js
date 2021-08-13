import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import firebase from "firebase";
import LeftOtter from "../LeftOtter";
import RightOtter from "../RightOtter";
require("firebase/firestore");

function Home(props) {
  const { currentUser } = props;

  return (
    <>
      <View style={styles.container}>
        <Text>Welcome to your home screen, {currentUser.name}!</Text>
        <View
          style={{
            backgroundColor: "lavender",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LeftOtter />
          <RightOtter />
        </View>
        <View
          style={{
            backgroundColor: "lavender",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RightOtter />
          <LeftOtter />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
});

export default connect(mapStateToProps, null)(Home);
