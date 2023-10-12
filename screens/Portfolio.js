import { View, Text } from "react-native";
import { globalStyles } from "../styles/AppStyles";

const Portfolio = ({ navigation, route }) => {
  const name = route.params.name;
  const country = route.params.country;
  const totalImg = route.params.totalImg;

  return;
  <View style={globalStyles.container}>
   
    <Text style={globalStyles.text}>{name}</Text>
    <Text style={globalStyles.text}>{country}</Text>
    <Text style={globalStyles.text}>{totalImg}</Text>
  </View>;
};

export default Portfolio;
