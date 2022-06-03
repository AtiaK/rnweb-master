import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { colour } from "../theme";
const width = Dimensions.get("window").width;
const UberSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeading}>Über das Rudel</Text>
      <View style={styles.txtContainer}>
        <Text style={styles.txt}>
          Title{"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque luctus cursus scelerisque etiam est gravida felis.
          Placerat luctus risus, sagittis, arcu gravida odio. Ultrices
          pellentesque amet dolor eu tellus a turpis pulvinar. Sit in purus
          elit, quam duis pellentesque. Accumsan nam est viverra sapien, eget
          aenean mattis amet ligula. Aliquet ac, habitant facilisis ac.
        </Text>

        <Text style={styles.txt}>
          Title{"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque luctus cursus scelerisque etiam est gravida felis.
          Placerat luctus risus, sagittis, arcu gravida odio. Ultrices
          pellentesque amet dolor eu tellus a turpis pulvinar. Sit in purus
          elit, quam duis pellentesque. Accumsan nam est viverra sapien, eget
          aenean mattis amet ligula. Aliquet ac, habitant facilisis ac.
        </Text>
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
    fontSize: 55,
    marginHorizontal: 20,
    color: colour.solidWhite,
  },
  txt: {
    marginHorizontal: 20,
    fontWeight: "400",
    fontSize: 20,
    color: colour.lightGray,
    marginTop: 20,
    marginRight:10,
    flexGrow:1,
    width: width/2,
  },
  txtContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});
export default UberSection;
