import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeadlineSection from "../../components/HeadlineSection";
import Jobs from "../../components/Jobs";
import Kontact from "../../components/Kontact";
import Navbar from "../../components/NavBar";
import Standort from "../../components/Standort";
import { colour } from "../../components/theme";
import UberSection from "../../components/UberSection";
const height = Dimensions.get("window").height;
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />

        <Header />

        <UberSection />
        <HeadlineSection />
        <Jobs/>
        <Kontact/>
        <Standort />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colour.solidBlack,
  },
});
