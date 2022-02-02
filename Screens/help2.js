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
  uri: "https://th.bing.com/th/id/R.442ad3d34e09c874109792a01623afcc?rik=6I0oUQ68B4lmqw&riu=http%3a%2f%2fil7.picdn.net%2fshutterstock%2fvideos%2f3883037%2fthumb%2f1.jpg&ehk=ZNm%2fdctLyg%2b8vybBbE5YQ%2f6XTJNbACdHIN5s%2fgfH4gM%3d&risl=&pid=ImgRaw&r=0",
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
      <Story title="She carefully takes the painkiller and eventually calms down. As a return for the help she opens up a gate next to the shining door and pushes you in. After a second of bright light you finally came out of the woods and is sitting on the backyard of your house." />

      <RowSeparator />

      <RowItem
        title="Congratulations"
        onPress={() => navigation.push("end")}
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
