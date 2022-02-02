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
  uri: "https://th.bing.com/th/id/R.cd01cafef69c16afe07f05c4a127e776?rik=d%2fMgx%2bl%2bN4p3Fw&riu=http%3a%2f%2fwww.creativeuncut.com%2fgallery-18%2fart%2fdc-treasure-room.jpg&ehk=HyvXCIbWTaHbajMroXA1EwZcjJpaX7%2bU0az6pjqinl0%3d&risl=&pid=ImgRaw&r=0",
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
      <Story title="As you follow the torches there are lights coming out, and when you approached to the lights, you see a room filled with treasure and the exit door on the other side of the room." />

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
