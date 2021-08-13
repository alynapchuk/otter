import React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginTop: "5%",
  },
  logo: {
    width: 60,
    height: 50,
  },
});
const LeftOtter = () => {
  return (
    <Image
      style={styles.tinyLogo}
      source={require("../assets/cute-otter-left.png")}
    />
  );
};

export default LeftOtter;
