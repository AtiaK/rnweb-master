import React from "react";
import { colour } from "../theme";
import { View, Text, StyleSheet } from "react-native";
const Kontact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeading}>Standorte</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
          marginVertical: 20,
          flexWrap: "wrap",
        }}
      >
        <View style={{ flexDirection: "column", margin: 20 }}>
          <Text style={[styles.itemtxt, { color: colour.solidWhite }]}>
            Bonn.
          </Text>
          <Text style={styles.itemtxt}>
            Adenauerallee 108{"\n"}
            53113 Bonn
          </Text>
          <Text style={styles.itemtxt}>
            0228 38 75 89 90{"\n"}
            info@kreativrudel.de
          </Text>

          <View style={styles.borderContainer}>
            <Text style={styles.borderTxt}>auf Karte zeigen</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", margin: 20 }}>
          <Text style={[styles.itemtxt, { color: colour.solidWhite }]}>
            Hamburg.
          </Text>
          <Text style={styles.itemtxt}>
            c/o brandcooks GmbH{"\n"}
            Neuer Wall 80{"\n"}
            20354 Hamburg
          </Text>
          <Text style={styles.itemtxt}>
            040 328902-567{"\n"}
            info@kreativrudel.de
          </Text>
          <View style={styles.borderContainer}>
            <Text style={styles.borderTxt}>auf Karte zeigen</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", margin: 20 }}>
        <Text style={[styles.itemtxt, { color: colour.solidWhite }]}>
        Heinsberg.
          </Text>
          <Text style={styles.itemtxt}>Brückstr. 35{'\n'}
41836 Hückelhoven
</Text>
<Text style={styles.itemtxt}>
            040 328902-567{"\n"}
            info@kreativrudel.de
          </Text>
          <View style={styles.borderContainer}>
            <Text style={styles.borderTxt}>auf Karte zeigen</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: "column",
    marginHorizontal: 40,
    marginVertical: 40,
  },

  txtHeading: {
    fontWeight: "700",
    fontSize: 55,
    color: colour.solidWhite,
  },
  itemtxt: {
    color: colour.lightGray,
    fontSize: 20,
    fontWeight: "400",
    marginVertical: 10,
  },
  borderTxt: {
    color: colour.solidWhite,
    fontSize: 20,
    marginBottom: 10,
  },
  borderContainer: {
    borderBottomWidth: 2,
    marginTop:40,
    borderBottomColor: colour.callToAction,
  },
});

export default Kontact;
