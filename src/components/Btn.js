import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { colour } from "./theme";

const Btn = ({ style, lbl }) => {
  return (
    <TouchableOpacity style={[styles.btnContainer, style]}>
      <Text style={styles.btnTxt}>{lbl}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: 25,
    paddingVertical: 13,
    flexDirection:"column",
    alignContent:"center",
    backgroundColor: colour.callToAction,
  },
  btnTxt: {
    color: colour.solidBlack,
    fontWeight:"700",
    fontSize:20
  },
});

export default Btn;
