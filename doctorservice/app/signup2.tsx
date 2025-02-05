import { Text, View, TextInput, Button, StyleSheet, Platform } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import globalStyles from "./Styles"; // Assuming your global styles are in a separate file like `styles.tsx`

const Signup2 = () => {
  const router = useRouter();

  const [diabetes, setDiabetes] = useState("No");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [allergies, setAllergies] = useState("");
  const [geneticDiseases, setGeneticDiseases] = useState("");
  const [bmi, setBmi] = useState(null); // To store the calculated BMI

  const handlePress = () => {
    // Validators
    if (!height || !weight || isNaN(Number(height)) || isNaN(Number(weight))) {
      alert("Please enter valid numeric values for height and weight.");
      return;
    }

    // Calculate BMI
    const heightInMeters = parseFloat(height);
    const weightInKg = parseFloat(weight);
    const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);

    // Proceed to the next step
    router.push("/signup3");
  };

  return (
    <View style={globalStyles.container}>
      {/* Diabetes Dropdown */}
      <Text style={globalStyles.header}>Diabetes</Text>
      <Picker
        selectedValue={diabetes}
        onValueChange={(itemValue) => setDiabetes(itemValue)}
      >
        <Picker.Item label="No" value="No" />
        <Picker.Item label="Yes" value="Yes" />
      </Picker>

      {/* Height Input */}
      <Text style={globalStyles.header}>Height</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="in meters (e.g., 1.75)"
        placeholderTextColor="#b0c4de"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />

      {/* Weight Input */}
      <Text style={globalStyles.header}>Weight</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="in kg (e.g., 70)"
        placeholderTextColor="#b0c4de"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      {/* Allergies Input */}
      <Text style={globalStyles.header}>Allergies</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="e.g., Dust, Pollen"
        placeholderTextColor="#b0c4de"
        value={allergies}
        onChangeText={(text) => setAllergies(text)}
      />

      {/* Genetic Diseases Input */}
      <Text style={globalStyles.header}>Genetic Diseases</Text>
      <TextInput
        style={globalStyles.input}
        placeholder=""
        placeholderTextColor="#b0c4de"
        value={geneticDiseases}
        onChangeText={(text) => setGeneticDiseases(text)}
      />

      {/* Button */}
      <Button title="Next" onPress={handlePress} />
    </View>
  );
};

export default Signup2;
