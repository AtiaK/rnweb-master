import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { colour } from "../theme";
const Footer = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 35, height: 45, marginLeft:20 }}
        source={require("../../../assets/Vector.png")}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          
          marginVertical: 20,
          flexWrap:"wrap"
        }}
      >
        <View style={{ flexDirection: "column", margin:20 }}>
          <Text style={styles.itemtxt}>Agentur</Text>
          <Text style={styles.itemtxt}>Leistungen</Text>
          <Text style={styles.itemtxt}>Projekte</Text>
          <Text style={styles.itemtxt}>Kontakt</Text>
        </View>
        <View style={{ flexDirection: "column" , margin:20}}>
          <Text style={styles.itemtxt}>Karriere</Text>
          <Text style={styles.itemtxt}>Shop</Text>
        </View>
        <View style={{ flexDirection: "column", margin:20 }}>
          <Text style={styles.itemtxt}>Facebook</Text>
          <Text style={styles.itemtxt}>Instagram</Text>
          <Text style={styles.itemtxt}>Youtube</Text>
        </View>
        <View style={{ flexDirection: "column" , margin:20}}>
          <Text style={styles.itemtxt}>Impressum</Text>
          <Text style={styles.itemtxt}>Datenschutz</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex:1,
    marginHorizontal: 40,
    marginVertical: 40,
  },

  txtHeading: {
    fontWeight: "700",
    fontSize: 110,
    color: colour.solidWhite,
  },
  itemtxt: {
    color: colour.lightGray,
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 10,
  },
});
export default Footer;
