import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  /*
  {"navigation": {"addListener": [Function addListener], 
  "canGoBack": [Function canGoBack],
   "dispatch": [Function dispatch],
    "getId": [Function getId],
    "getParent": [Function getParent], 
    "getState": [Function anonymous], 
    "goBack": [Function anonymous],
    "isFocused": [Function isFocused],
    "navigate": [Function anonymous],
    "pop": [Function anonymous],
    "popToTop": [Function anonymous],
    "push": [Function anonymous],
    "removeListener": [Function removeListener], 
    "replace": [Function anonymous], 
    "reset": [Function anonymous],
    "setOptions": [Function setOptions],
    "setParams": [Function anonymous]}, 
    "route": {
    "key": "Home-8n3i5HCNOdfn9eaAv2n8V",
    "name": "Home", "params": undefined
    }
}
  */

  const handlePress = () => {
    navigation.navigate("Portfolio");
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Home </Text>
      <Button onPress={handlePress} 
      title="Vers Portfolio" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 50,
    fontFamily: "InriaSans-BoldItalic",
    fontSize: 25,
  },
});
