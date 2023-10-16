import { useLayoutEffect } from "react";
import { View, Text, Platform, Button } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";

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
        <Button title="Cliquez" onPress={() => alert("This is a button!")} />
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
