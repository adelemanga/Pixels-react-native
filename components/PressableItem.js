import { Text, View, Image, Pressable } from "react-native";
import { globalStyles } from "../styles/AppStyles";
import Colors from "../styles/Colors";
// import { useNavigation } from "react-router-dom";

const PressableItem = ({ item, navigationProp }) => {
//   const navigation = useNavigation();

  return (
    <Pressable
      // onPress={handleNavigate}
      onPress={() => navigationProp.navigate("Portfolio", item)}
      style={({ pressed }) => [
        { backgroundColor: pressed ? Colors.clicked : Colors.white },
        globalStyles.pofileItem,
      ]}
    >
      <Text style={globalStyles.titleText}>{item.name}</Text>
      <Image source={{ url: item.img }} style={globalStyles.profileImg} />

      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.infos}>{item.country}</Text>
        <Text style={globalStyles.infos}>{item.totalImg}</Text>
      </View>
    </Pressable>
  );
};

export default PressableItem;
