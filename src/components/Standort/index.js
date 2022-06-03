import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { TextInput, View, Text, StyleSheet, Dimensions } from "react-native";
import { colour } from "../theme";
import Btn from "../Btn";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Standort = () => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.txtHeading}>Kontakt</Text>
      <View style={styles.formContainer}>
        <View style={{flexBasis:300,    flexGrow: 1,  marginRight: 10 }}>
          <Text style={styles.txt}>
            Title{"\n"} Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque luctus cursus scelerisque etiam est gravida felis.
            Placerat luctus risus, sagittis, arcu gravida odio. Ultrices
            pellentesque amet dolor eu tellus a turpis pulvinar. Sit in purus
            elit, quam duis pellentesque. Accumsan nam est viverra sapien, eget
            aenean mattis amet ligula. Aliquet ac, habitant facilisis ac.
          </Text>
        </View>
        <View
          style={{
            flexBasis:300, 
            marginLeft: 10,
            flexGrow: 1,
          }}
        >
          <View style={styles.inputContainer}>
            <Text style={styles.lblTxt}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => console.log(e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.lblTxt}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => console.log(e)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.lblTxt}>Telefon</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => console.log(e)}
            />
          </View>
          <View
            style={[
              styles.inputContainer,
              { alignItems: "center", marginVertical: 20 },
            ]}
          >
            <Text style={styles.lblTxt}>Dokumente</Text>
            <View style={styles.uploadContainer}>
              <View>
                <Text style={styles.lblTxt}>Dokumente hier hin ziehen</Text>
              </View>
              <View style={styles.borderContainer}>
                <Text style={styles.borderTxt}>Dateien durchsuchen</Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.inputContainer,
              { alignItems: "center", marginBottom: 20 },
            ]}
          >
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? colour.callToAction : undefined}
            />
            <Text style={[styles.lblTxt, { marginBottom: 5 }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              interdum volutpat, at in lacus.
            </Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Btn style={{ width: 145 }} lbl="Absenden" />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    
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
  },
  input: {
    height: 40,
    margin: 12,
    color: colour.solidWhite,
    flexGrow: 1,
    borderBottomWidth: 1,
    borderColor: colour.solidWhite,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  lblTxt: {
    color: colour.lightGray,
    fontSize: 16,
    marginBottom: 10,
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  checkbox: {
    margin: 8,
  },
  uploadContainer: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: colour.callToAction,
    flex: 1,
    height: 200,
    marginLeft: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  borderTxt: {
    color: colour.solidWhite,
    fontSize: 16,
    marginBottom: 10,
  },
  borderContainer: {
    borderBottomWidth: 2,
    borderBottomColor: colour.callToAction,
  },
});
export default Standort;
