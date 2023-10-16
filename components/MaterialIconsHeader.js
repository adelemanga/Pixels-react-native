import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MaterialIconsHeader = ({ iconName, iconColor, onPressIcon }) => {
  return (
    <Pressable
     onPress={onPressIcon}
     style={({pressed}) => pressed && styles.iconPressed}
     >
      <MaterialIcons name={iconName} size={24} color={iconColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
    iconPressed: {
        opacity: 0.2
    }
});
export default MaterialIconsHeader;
