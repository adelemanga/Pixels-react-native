import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Portfolio({ navigation }) {
  useEffect(() => {
    return () => {
      console.log("Portfolio démonté");
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Portfolio</Text>
      <Button onPress={() => navigation.replace("Photo")}
       title="Vers Photo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
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
