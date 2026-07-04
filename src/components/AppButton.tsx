import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../src/themes/colors";

type Props = {
  title: string;
  onPress: () => void;
};

export default function AppButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 14,
    marginVertical: 8,
    alignItems: "center",
  },

  text: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});