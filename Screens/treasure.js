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



export default ({ navigation }) => {
  return (
    <SafeAreaView>
  
      < Story 
        title = "As you follow the torches there are lights coming out, and when you approached to the lights, you see a room filled with treasure and the exit door on the other side of the room."
      />


      <RowSeparator />

      <RowItem
        title="Take The Treasures Before You Exit The House"
        onPress={() => navigation.push("Treasure")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

      <RowSeparator />

      <RowItem
        title="Run Right To The Door, Ignoring The Treasures."
        onPress={() => navigation.push("Exit")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />
    </SafeAreaView>
  );
};