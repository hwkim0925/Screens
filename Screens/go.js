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
  uri: "https://th.bing.com/th/id/OIP.cBizMSEg8fnwzWpB4zpVigHaFj?pid=ImgDet&rs=1",
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
      <Story title="As you enter the door you realize that you came back to the first stage of the house, and as you walk through the hallway again there are two doors." />

      <RowSeparator />

      <RowItem
        title="Left Door"
        onPress={() => navigation.push("Right Door")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Right Door"
        onPress={() => navigation.push("Left Door")}
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
