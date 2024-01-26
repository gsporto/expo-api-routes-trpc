import React, { Suspense } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Hello } from "@/components/Hello";
import { api } from "@/trpc/react";

export default function Page() {
  const utils = api.useUtils();

  const handleRefetch = () => {
    utils.post.hello.reset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Expo App Idea Generator</Text>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Hello />
        </Suspense>
        <TouchableOpacity style={styles.button} onPress={handleRefetch}>
          <Text style={styles.buttonText}>Refetch</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    gap: 8,
    justifyContent: "center",
    alignItems: "flex-start",
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
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10
  },
  buttonText: {
    color: "white",
  },
});
