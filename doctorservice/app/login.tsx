import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import globalStyles from "./Styles";

const Login = () => {
  const router = useRouter();

  const handleRedirectToSignup = () => {
    router.navigate("/signup");
  };
  const handleReroutePage = () => {
    router.navigate("/FirstScreen");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Login</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        placeholderTextColor="#b0c4de"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        placeholderTextColor="#b0c4de"
        secureTextEntry
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleReroutePage}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: "blue", marginTop: 10 }]}
        onPress={handleRedirectToSignup}
      >
        <Text style={globalStyles.buttonText}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
