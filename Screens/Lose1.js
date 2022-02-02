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
      <Story title="Even though you tried your best, it was impossible to escape the woods and you finally died due to hunger." />

      <RowSeparator />

      <RowItem
        title="Go Back To The Start"
        onPress={() => navigation.push("Survive")}
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
