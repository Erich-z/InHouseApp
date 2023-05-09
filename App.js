import React from "react";
import { Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import MainTab from "./src/navigators/MainTab";
import Chat from "./src/pages/Chat";

function App(){
  return(
  <NavigationContainer>
    <Chat/>
  </NavigationContainer>
  )
}

export default App;