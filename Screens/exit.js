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
  uri: "https://ae01.alicdn.com/kf/HTB18lXWcv9TBuNjy0Fcxh6eiFXaM/Laeacco-Fairytale-Garden-Arch-Door-Scenic-Baby-Photography-Backgrounds-Customized-Photographic-Backdrops-For-Photo-Studio.jpeg",
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
      <Story title="Right after you cross the treasures and exit the room, you hear the room collapsing. With relief, you keep running towards the light and finally arrives to a garden. The light was coming from a door in the center of the garden and an old lady is on the ground groaning." />

      <RowSeparator />

      <RowItem
        title="Ask The Lady If She's Alright"
        onPress={() => navigation.push("help")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Ignore The Old Lady And Enter The Door"
        onPress={() => navigation.push("go")}
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
