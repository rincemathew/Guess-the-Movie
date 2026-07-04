import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../src/themes/colors";

const levels = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  unlocked: i < 3, // First 3 levels unlocked
}));

export default function LevelsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Level</Text>

      <FlatList
        data={levels}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            disabled={!item.unlocked}
            style={[
              styles.card,
              {
                backgroundColor: item.unlocked
                    ? Colors.primary
                    : "#999",
              },
            ]}
          >
            <Text style={styles.levelText}>
              {item.unlocked ? `Level ${item.id}` : "🔒"}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.secondary,
    textAlign: "center",
    marginVertical: 20,
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    width: "47%",
    height: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  levelText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
});