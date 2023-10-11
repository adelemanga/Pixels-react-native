import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Photo from "./screens/Photo";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    "InriaSans-Bold": require("./assets/Fonts/Inria_Sans/InriaSans-Bold.ttf"),
    "InriaSans-BoldItalic": require("./assets/Fonts/Inria_Sans/InriaSans-BoldItalic.ttf"),
    "InriaSans-Italic": require("./assets/Fonts/Inria_Sans/InriaSans-Italic.ttf"),
    "InriaSans-Light": require("./assets/Fonts/Inria_Sans/InriaSans-Light.ttf"),
    "InriaSans-LightItalic": require("./assets/Fonts/Inria_Sans/InriaSans-LightItalic.ttf"),
    "InriaSans-Regular": require("./assets/Fonts/Inria_Sans/InriaSans-Regular.ttf"),
  });

  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
