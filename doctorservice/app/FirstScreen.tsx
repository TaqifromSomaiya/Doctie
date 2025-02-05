import { Text, View, Button, StyleSheet, Platform } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import globalStyles from "./Styles"; // Import global styles

const FirstScreen = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/symptoms");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.quoteText}>
        Good health is such that when it lasts, it is disregarded and when it is lost, its value is known.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Contact a Doctor Right Now"
          onPress={handlePress}
          color="#black" 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteText: {
    fontSize: Platform.OS === 'web' ? 48 : 60, 
    fontStyle: "italic",
    color: "white",
    textAlign: "center",
    marginVertical: Platform.OS === 'web' ? '30%' : '35%', // Adjust margin for web
    paddingHorizontal: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: Platform.OS === 'web' ? 40 : 20,
    right: 20,
    width: Platform.OS === 'web' ? "60%" : "80%", 
    backgroundColor: "#333",
    borderRadius: 8,
    paddingVertical: Platform.OS === 'android' ? 15 : 10, 
  },
});

export default FirstScreen;
