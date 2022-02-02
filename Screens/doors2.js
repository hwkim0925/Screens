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
        title = "You entered the right door and suddenly the ceiling started to fall and the room collapsed"
      />


      <RowSeparator />

      <RowItem
        title="You Died"
        onPress={() => navigation.push("Doors")}
        icon={<AntDesign name="caretright" size={24} color="black" />}
      />

    </SafeAreaView>
  );
};