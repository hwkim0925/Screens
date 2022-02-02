import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  Linking,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { RowSeparator, RowItem } from "../component/RowItem";
import { Story } from "../component/Story";

const image = {
  uri: "https://th.bing.com/th/id/R.dbcd9dbc7859030788bcc2033a7377f2?rik=fGNjrJyMxkJ%2fNg&riu=http%3a%2f%2fil3.picdn.net%2fshutterstock%2fvideos%2f2496062%2fthumb%2f3.jpg&ehk=DAODNoflqG4XcttWYkCEkshtyDC4W9kaR5dcuX9GL%2bg%3d&risl=&pid=ImgRaw&r=0",
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
      <Story title="Outragously, with her weird magic, she pushes you to the shining door." />

      <RowSeparator />

      <RowItem
        title="Enters The Door"
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
