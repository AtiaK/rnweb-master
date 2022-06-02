import React from "react";
import { View, Text, StyleSheet, Image , Dimensions} from "react-native";
import { colour } from "../theme";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Header = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.txtHeading}>We are hiring</Text>
      <Image
      resizeMode="cover"
        style={styles.bgImg}
        source={require("../../../assets/bg.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      // flex:1,
    flexDirection: "column",
    marginHorizontal: 40,
    marginVertical:40
  },

  txtHeading: {
    fontWeight: "700",
    fontSize: 110,
    color:colour.solidWhite
  },
  bgImg:{
      marginTop:20,
      flexGrow:1,
      height:height-200,
      width:width-100
  }
});

export default Header;
