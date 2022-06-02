import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Btn from "../Btn";
import { colour } from "../theme";
const Jobs = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeading}>Aktuelle Jobs</Text>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => setToggle(!toggle)}
      >
        <Text style={styles.itemTxt}>Wordpress-Entwickler*in (m/w/d)</Text>
        {toggle === true ? (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowup.png`)}
          />
        ) : (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowdown.png`)}
          />
        )}
      </TouchableOpacity>
      {toggle === true?(
          <>
      <Text
        style={{ fontSize: 20, color: colour.solidWhite, fontWeight: "400" }}
      >
        Das sind deine Aufgaben bei kreativrudel
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Text
        style={{ fontSize: 20, marginTop:20,color: colour.solidWhite, fontWeight: "400" }}
      >
       Das bringst du mit:
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Text style={styles.p}>
        <Text style={{ color: colour.callToAction }}>_</Text>Neu- und
        Weiterentwicklung von unseren WordPress-Projekten für nationale und
      </Text>
      <Btn style={{ width: 200, marginTop:20 }} lbl="Jetzt bewerben" />
      </>
      ):null}
          <View style={{borderWidth:0.5, borderColor:colour.lightGray, marginTop:20}}></View>
      <TouchableOpacity
        style={styles.itemContainer}
        // onPress={() => setToggle(!toggle)}
      >
        <Text style={styles.itemTxt}>Wordpress-Entwickler*in (m/w/d)</Text>
        {toggle === true ? (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowup.png`)}
          />
        ) : (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowdown.png`)}
          />
        )}
      </TouchableOpacity>
      <View style={{borderWidth:0.5, borderColor:colour.lightGray}}></View>
      <TouchableOpacity
        style={styles.itemContainer}
        // onPress={() => setToggle(!toggle)}
      >
        <Text style={styles.itemTxt}>Wordpress-Entwickler*in (m/w/d)</Text>
        {toggle === true ? (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowup.png`)}
          />
        ) : (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowdown.png`)}
          />
        )}
      </TouchableOpacity>
      <View style={{borderWidth:0.5, borderColor:colour.lightGray}}></View>
      <TouchableOpacity
        style={styles.itemContainer}
        // onPress={() => setToggle(!toggle)}
      >
        <Text style={styles.itemTxt}>Wordpress-Entwickler*in (m/w/d)</Text>
        {toggle === true ? (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowup.png`)}
          />
        ) : (
          <Image
            style={styles.bgImg}
            source={require(`../../../assets/arrowdown.png`)}
          />
        )}
      </TouchableOpacity>
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
  bgImg: {
    height: 15,
    width: 35,
  },
  itemTxt: {
    fontSize: 36,
    fontWeight: "400",
    color: colour.solidWhite,
  },
  itemContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  p:{
      marginVertical:5,
      fontSize: 20, color: colour.lightGray 
  }
});
export default Jobs;
