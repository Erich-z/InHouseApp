import React from "react";
import { Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import MainTab from "./src/navigators/MainTab";

function App(){
  return(
  <NavigationContainer>
    <MainTab/>
  </NavigationContainer>
  )
}

export default App;