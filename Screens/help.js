import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Linking,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RowSeparator, RowItem } from "../component/RowItem";
import { Story } from "../component/Story";

const image = {
  uri: "https://c8.alamy.com/comp/BWXT5A/old-woman-poverty-ground-bottom-misery-squalor-india-asia-life-lie-BWXT5A.jpg",
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView>
      <Story title="You ask the lady what can you help. She painfully answers that she needs a painkiller that is on the desk right next to the shining door." />

      <RowSeparator />

      <RowItem
        title="Hand Her The Painkiller And A Cup Of Water Carefully"
        onPress={() => navigation.push("Give her the painkiller")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Throws Away The Painkiller As Far As Possible Suspecting That Killing Her Is The Way To Get Out Of This Nightmare"
        onPress={() => navigation.push("Throw the painkiller away")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />
      <View style={styles.container}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
    </SafeAreaView>
  );
};
