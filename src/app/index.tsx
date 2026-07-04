import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../../src/components/AppButton";
import { Colors } from "../../src/themes/colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>🎬</Text>

      <Text style={styles.title}>
        Guess The Movie
      </Text>

      <Text style={styles.subtitle}>
        Guess the movie from a single image!
      </Text>

      <View style={{ marginTop: 40 }}>

        <AppButton
          title="▶ PLAY"
          onPress={() => router.push("/levels")}
        />

        <AppButton
          title="🏆 LEADERBOARD"
          onPress={() => {}}
        />

        <AppButton
          title="🛒 SHOP"
          onPress={() => {}}
        />

        <AppButton
          title="⚙ SETTINGS"
          onPress={() => {}}
        />

      </View>

      <View style={styles.bottom}>
        <Text style={styles.coin}>
          🪙 500
        </Text>

        <Text style={styles.version}>
          Version 1.0.0
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    fontSize: 70,
    textAlign: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.secondary,
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    marginTop: 8,
    fontSize: 16,
    color: Colors.grey,
  },

  bottom: {
    marginTop: 40,
    alignItems: "center",
  },

  coin: {
    fontSize: 20,
    fontWeight: "bold",
  },

  version: {
    marginTop: 10,
    color: Colors.grey,
  },
});