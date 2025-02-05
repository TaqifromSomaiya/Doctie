import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="Index" />
    <Stack.Screen name="login" />
    <Stack.Screen name="signup"/>
    <Stack.Screen name="signup2"/>
    <Stack.Screen name="signup3" />
    <Stack.Screen name="FirstScreen"/>
    <Stack.Screen name="symptoms"/>
    <Stack.Screen name="Styles"/>
    <Stack.Screen name="docselection"/>
    <Stack.Screen name="docvid"/>
    <Stack.Screen name="botconvo"/>
    <Stack.Screen name="extremeemerg"/>
  
  </Stack>;
}
