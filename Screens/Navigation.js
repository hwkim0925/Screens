import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Option from "../Screens/Option";
import Option2 from "./Option2";
import Option3 from "./Option3";
import Lose1 from "./Lose1";
import doors1 from "./doors1";
import doors2 from "./doors2";
import treasure from "./treasure";
import exit from "./exit";
import take from "./take";
import help from "./help";
import go from "./go";
import help2 from "./help2";
import ignore2 from "./ignore2";
import end from "./end";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Survive" component={Option} />
        <MainStack.Screen name="The Woods" component={Option2} />
        <MainStack.Screen name="Doors" component={Option3} />
        <MainStack.Screen name="Fail1" component={Lose1} />
        <MainStack.Screen name="Left Door" component={doors1} />
        <MainStack.Screen name="Right Door" component={doors2} />
        <MainStack.Screen name="Treasure and Door" component={treasure} />
        <MainStack.Screen name="Exit" component={exit} />
        <MainStack.Screen name="Treasure" component={take} />
        <MainStack.Screen name="help" component={help} />
        <MainStack.Screen name="go" component={go} />
        <MainStack.Screen name="Give her the painkiller" component={help2} />
        <MainStack.Screen name="Throw the painkiller away" component={ignore2} />
        <MainStack.Screen name="end" component={end} />


    </MainStack.Navigator>
);

export default () => (
    <NavigationContainer>
        <MainStackScreen />
    </NavigationContainer>
);