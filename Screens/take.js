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
  uri: "https://th.bing.com/th/id/OIP.rvhvwxKpUNvVUU2pEPsvywHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.05&pid=1.7",
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
      <Story title="As you pick up the treasures, the balance that was being maintained due to the treasures broke and the ground started to collapse. Even though you tried to jump to the exit the crack between was too big and you eventually fell into the crack." />

      <RowSeparator />

      <RowItem
        title="You Died"
        onPress={() => navigation.push("Treasure and Door")}
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
