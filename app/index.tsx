import React, { Suspense } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Hello } from "@/components/Hello";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Expo App Idea Generator</Text>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Hello />
        </Suspense>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    marginHorizontal: "auto",
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    gap: 8,
    justifyContent: "center",
    alignItems: "stretch",
    maxWidth: 640,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 24,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
