import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeadlineSection from "../../components/HeadlineSection";
import Jobs from "../../components/Jobs";
import Kontact from "../../components/Kontact";
import Navbar from "~/../../src/components/Navbar";
import Standort from "../../components/Standort";
import { colour } from "../../components/theme";
import UberSection from "../../components/UberSection";
import { StatusBar } from 'expo-status-bar';
const height = Dimensions.get("window").height;
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <Header />
        <UberSection />
        <HeadlineSection />
        <Jobs />
        <Kontact />
        <Standort />
        <Footer />
      </ScrollView>
      <StatusBar style="light" backgroundColor="#000"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    backgroundColor: colour.solidBlack,
  },
});
