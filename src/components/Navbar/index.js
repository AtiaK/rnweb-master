import React from "react";
import { View, Image, StyleSheet } from "react-native-web";
import Btn from "../Btn";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.rightContainer}>
        <Btn lbl="Kontakt" style={{ width: 127 }} />
        <Image
          style={styles.menuIcon}
          source={require("../../../assets/BurgerMenu.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 50,
    marginHorizontal: 10,
  },
  menuIcon: {
    marginHorizontal: 20,
    width: 40,
    height: 30,
  },
});

export default Navbar;
