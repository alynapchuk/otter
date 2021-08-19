import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import { useLinkTo } from '@react-navigation/native';
import { connect } from "react-redux";

function Home(props) {
  const { currentUser } = props;
  const linkTo = useLinkTo();

  return (
    <>
      <View style={styles.container}>

        <Image
          style={styles.userImage}
          source={currentUser.profile_picture || require('../../assets/profile.png')} />

        <Button
          title="Change Photo"
          onPress={() => linkTo('/Upload')}
        />

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
  }
});