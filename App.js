import React from "react";
import { Text, View } from "react-native";
import {NavigationContainer} from "@react-navigation/native"
import MainTab from "./src/navigators/MainTab";
import { Provider } from 'react-redux';
import store from "./src/store";

function App(){
  return(
    <Provider store={store}>
  <NavigationContainer>
    <MainTab />
  </NavigationContainer>
  </Provider>
  )
}

export default App;