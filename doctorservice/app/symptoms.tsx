import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import globalStyles from "./Styles"; 
import { router, useRouter } from "expo-router";

type SymptomKeys = "headache" | "earPain" | "chestPain" | "stomachPain" | "additionalSymptoms";

const symptoms = () => {
  const [symptoms, setSymptoms] = useState<{
    headache: boolean | null;
    earPain: boolean | null;
    chestPain: boolean | null;
    stomachPain: boolean | null;
    additionalSymptoms: string;
  }>({
    headache: null,
    earPain: null,
    chestPain: null,
    stomachPain: null,
    additionalSymptoms: "",
  });

  const handleYesNo = (field: SymptomKeys, value: boolean) => {
    setSymptoms({ ...symptoms, [field]: value });
  };
  const router = useRouter();

  const handleSubmit = () => {
    router.navigate("/docselection");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.header}>Check Your Symptoms</Text>

      {[
        { label: "Do you have a headache?", key: "headache" },
        { label: "Do you have ear pain?", key: "earPain" },
        { label: "Do you have chest pain?", key: "chestPain" },
        { label: "Do you have stomach pain?", key: "stomachPain" },
      ].map((item) => (
        <View key={item.key} style={styles.questionContainer}>
          <Text style={styles.question}>{item.label}</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={[
                styles.optionButton,
                symptoms[item.key as SymptomKeys] === true && styles.activeButton,
              ]}
              onPress={() => handleYesNo(item.key as SymptomKeys, true)}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.optionButton,
                symptoms[item.key as SymptomKeys] === false && styles.activeButton,
              ]}
              onPress={() => handleYesNo(item.key as SymptomKeys, false)}
            >
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Additional Symptoms */}
      <Text style={styles.question}>Describe other symptoms:</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="e.g., fever, nausea"
        placeholderTextColor="#b0c4de"
        value={symptoms.additionalSymptoms}
        onChangeText={(text) => setSymptoms({ ...symptoms, additionalSymptoms: text })}
        multiline={true}
        numberOfLines={4}
      />

      {/* Submit Button */}
      <View style={styles.submitButtonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#121010" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  questionContainer: {
    marginBottom: 20,
    alignItems: "flex-start",
    width: "90%",
  },
  question: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  optionButton: {
    backgroundColor: "#b0c4de",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: "#333", // Active button color
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  submitButtonContainer: {
    marginTop: 30,
    backgroundColor: "#pink",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "80%",
  },
});

export default symptoms;
