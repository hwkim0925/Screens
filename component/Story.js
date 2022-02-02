import React from "react";
import { View, StyleSheet, TouchableHighlight, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const styles = StyleSheet.create({
  text: {
    fontFamily: "serif",
    fontSize: 20,
    color: "#000",
    paddingHorizontal: 20,
    margin: 20,
  },
});

export const Story = ({title}) => {
  return <Text style={styles.text}>{title}</Text>
}