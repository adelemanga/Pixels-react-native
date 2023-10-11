import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useEffect } from "react";

const Photo = ({ navigation }) => {

  useEffect(() => {
    return () => {
      console.log("Photo démoté");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Photo</Text>
      <Button onPress={() => navigation.pop()}
       title="Vers Home" 
      />
   
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 375,
    fontFamily: "InriaSans-BoldItalic",
    fontSize: 25,
  },
});
