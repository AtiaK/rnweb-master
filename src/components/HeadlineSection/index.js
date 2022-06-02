import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { colour } from "../theme";
const width = Dimensions.get("window").width;
const HeadlineSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txtContainerHe}>
        <Image
          style={styles.leftImg}
          source={require("../../../assets/bgleft.png")}
        />

        <View style={{  
          // width:width /2 -200 ,
          marginLeft:10,
          width:300 ,
          flexGrow:1
          }}>
          <Text style={styles.txtHeading}>Insert headline here</Text>
          <Text style={styles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            luctus cursus scelerisque etiam est gravida felis. Placerat luctus
            risus, sagittis, arcu gravida odio. Ultrices pellentesque amet dolor
            eu tellus a turpis pulvinar. Sit in purus elit, quam duis
            pellentesque. Accumsan nam est viverra sapien, eget aenean mattis
            amet ligula. Aliquet ac, habitant facilisis ac.
          </Text>
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
    fontSize: 55,

    color: colour.solidWhite,
  },
  txtContainerHe: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  leftImg: {
    height: 400,
    // width:width/2-100
    marginRight:10,
    flexGrow:1,
    width:300
  },
  txt: {
    fontWeight: "400",
    fontSize: 20,
    color: colour.lightGray,
  },
  
});
export default HeadlineSection;
