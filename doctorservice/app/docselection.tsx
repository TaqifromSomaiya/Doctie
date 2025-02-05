import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import globalStyles from "./Styles"; // Import global styles

const docselection = () => {
  const router = useRouter();

  return (
    <View style={globalStyles.container}>

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => router.push("/docvid")}
      >
        <Text style={globalStyles.buttonText}>Video Call Doctor</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => router.push("/botconvo")}
      >
        <Text style={globalStyles.buttonText}>Talk to Our Virtual Doctor</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.button} 
        onPress={() => router.push("/extremeemerg")}
      >
        <Text style={globalStyles.buttonText}>Emergency Form</Text>
      </TouchableOpacity>
    </View>
  );
};

export default docselection;
