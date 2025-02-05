import { StyleSheet, Platform } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Platform.OS === "web" ? "#f8f9fa" : "#4869a7", // Lighter background for web
    padding: Platform.OS === "web" ? "5%" : 20, // More spacious padding on web
  },
  header: {
    color: Platform.OS === "web" ? "#333" : "#ffffff", // Darker text for web
    fontSize: Platform.OS === "web" ? 32 : 28, // Slightly smaller font for all platforms
    fontWeight: "bold",
    marginBottom: 30, // Consistent spacing
    textAlign: "center",
  },
  input: {
    width: Platform.OS === "web" ? "50%" : "90%", // Adaptive width for web and mobile
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 20, // Unified spacing between inputs
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    shadowColor: Platform.OS === "web" ? "rgba(0, 0, 0, 0.1)" : "#000", // Subtle shadow for all platforms
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: Platform.OS === "android" ? 5 : 0, // Shadow for Android
  },
  dropdown: {
    width: Platform.OS === "web" ? "50%" : "90%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: "center",
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: Platform.OS === "web" ? "rgba(0, 0, 0, 0.1)" : "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: Platform.OS === "android" ? 5 : 0,
  },
  button: {
    marginTop: 20,
    width: Platform.OS === "web" ? "50%" : "90%", // Button width matches input width
    paddingVertical: 12, // Vertical padding for better touchability
    backgroundColor: "#000",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Platform.OS === "web" ? "rgba(0, 0, 0, 0.2)" : "#000", // Button shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: Platform.OS === "android" ? 8 : 0,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: Platform.OS === "web" ? 18 : 16,
    fontWeight: "bold",
  },
});

export default globalStyles;
