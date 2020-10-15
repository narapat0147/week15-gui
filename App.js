import React,{ Component } from "react";
import { Text, View } from "react-native";
import HomeScreen from "./screen/HomeScreen";

export default class App extends Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <HomeScreen />
      </View>
    )
  }
}