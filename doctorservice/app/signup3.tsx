import { Text, View, TextInput, Button, StyleSheet, Platform } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import globalStyles from "./Styles"; // Import global styles

const Signup3 = () => {
  const router = useRouter();

  const handlePress = () => {
   
    router.push("/FirstScreen");
  };

  return (
    <View style={globalStyles.container}>
      {/* Username Input */}
      <Text style={globalStyles.header}>Username</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="UserName"
        placeholderTextColor="#b0c4de"
      />

      <Text style={globalStyles.header}>Email Id:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email Address"
        placeholderTextColor="#b0c4de"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={globalStyles.header}>Password</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        placeholderTextColor="#b0c4de"
        secureTextEntry
      />

      {/* Confirm Password Input */}
      <Text style={globalStyles.header}>Confirm Password</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#b0c4de"
        secureTextEntry
      />

      {/* Next Button */}
      <Button title="Next" onPress={handlePress} />
    </View>
  );
};

export default Signup3;
