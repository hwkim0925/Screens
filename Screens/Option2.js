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
  uri: "https://i.pinimg.com/736x/3c/c1/d1/3cc1d15dd78fffba707fc62332008de7.jpg",
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
      <Story title=" Even though you ran away from the house as far as possible you kept coming back to the house. You finally realize that there is no choice but to go into the house." />

      <RowSeparator />

      <RowItem
        title="Go Into The House"
        onPress={() => navigation.push("Doors")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Keep Running Away Ignoring The House"
        onPress={() => navigation.push("Fail1")}
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
