import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Start Game" onPress={() => { }} />
      <Button title="Instructions" onPress={() => { }} />
      <Button title="High Scores" onPress={() => { }} />
      <Button title="Exit" onPress={() => { }} />
    </View>
  );
}
