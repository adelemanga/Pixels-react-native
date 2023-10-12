import {
  useFonts,
  InriaSans_300Light,
  InriaSans_300Light_Italic,
  InriaSans_400Regular,
  InriaSans_400Regular_Italic,
  InriaSans_700Bold,
  InriaSans_700Bold_Italic,
} from "@expo-google-fonts/inria-sans";

import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";

import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Photo from "./screens/Photo";
import Colors from "./styles/Colors";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontLoaded] = useFonts({
    InriaSans_300Light,
    InriaSans_300Light_Italic,
    InriaSans_400Regular,
    InriaSans_400Regular_Italic,
    InriaSans_700Bold,
    InriaSans_700Bold_Italic,
  });

  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "olive",
          },
          headerTintColor: Colors.white,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Acceuil",
          }}
        />
        <Stack.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            title: "Portfolio",
          }}
        />
        <Stack.Screen
          name="Photo"
          component={Photo}
          options={{
            title: "Photo",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
