import { useLayoutEffect } from "react";
import { View, Text, Platform, Button } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import MaterialIconsHeader from "../components/MaterialIconsHeader";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;
  const favColor = route.params.favColor;

  useLayoutEffect(() => {
    navigation.setOptions({
      // title: `Portfolio de ${name}`,

      // headerStyle: {
      //   backgroundColor: favColor

      // },
      // headerTintColor: "#333",
      headerRight: () => (
        <MaterialIconsHeader
          iconName="info-outline"
          iconColor="black"
          onPressIcon={() => alert(`Hello ${name}! How i can hel you?`)}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>OS: {Platform.OS}</Text>
      <Text style={globalStyles.text}>Version:{Platform.Version}</Text>

      <Text style={globalStyles.text}>{name}</Text>
      <Text style={globalStyles.text}>{country}</Text>
      <Text style={globalStyles.text}>{totalImg}</Text>
    </View>
  );
};

export default Portfolio;
