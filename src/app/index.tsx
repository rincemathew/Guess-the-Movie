import { Text, View } from "react-native";
import AppButton from "../../src/components/AppButton";
import { Colors } from "../../src/themes/colors";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: Colors.background,
      }}
    >
      <Text
        style={{
          fontSize: 36,
          textAlign: "center",
          fontWeight: "bold",
          color: Colors.secondary,
          marginBottom: 50,
        }}
      >
        Guess The Movie
      </Text>

      <AppButton
        title="PLAY"
        onPress={() => {}}
      />

      <AppButton
        title="LEADERBOARD"
        onPress={() => {}}
      />

      <AppButton
        title="SHOP"
        onPress={() => {}}
      />

      <AppButton
        title="SETTINGS"
        onPress={() => {}}
      />
    </View>
  );
}