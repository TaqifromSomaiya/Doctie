import { Button, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push("/login");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Taqi bhai ne bole ,Hello</Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  );
};

export default Index;
