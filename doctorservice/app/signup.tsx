import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import {Picker} from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import globalStyles from "./Styles"; 
const Signup = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handlePress = () => {
    if (!name.trim()) {
      Alert.alert("Validation Error", "Name is required");
      return;
    }
    if (!age.trim() || isNaN(Number(age)) || Number(age) <= 0 || Number(age) > 200) {
      Alert.alert("Validation Error", "Please enter a valid age (1-200)");
      return;
    }
    if (!gender.trim()) {
      Alert.alert("Validation Error", "Gender is required");
      return;
    }

    router.push("/signup2");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Name</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Name"
        placeholderTextColor="#b0c4de"
        value={name}
        onChangeText={setName}
      />

      <Text style={globalStyles.header}>Age</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Age"
        placeholderTextColor="#b0c4de"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text style={globalStyles.header}>Gender</Text>
      <View style={globalStyles.dropdown}>
        <Picker 
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>

      <TouchableOpacity style={globalStyles.button} onPress={handlePress}>
        <Text style={globalStyles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
