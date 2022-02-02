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
  uri: "https://c2.staticflickr.com/4/3142/2711336073_66b6713c65_b.jpg",
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
      <Story title="You found yourself in the middle of the woods. Your phone isn't functioning and there are indistinctive sounds around you. Wondering around you found a house, dark and spooky but huge enough to spend the night. What will you do? " />

      <RowSeparator />

      <RowItem
        title="Run Away"
        onPress={() => navigation.push("The Woods")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Go Into The House"
        onPress={() => navigation.push("Doors")}
        icon={<AntDesign name="right" size={24} color="black" />}
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
