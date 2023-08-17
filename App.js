import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Screens/Login";

export default function App() {
  return (
    <View className="m-0 p-0 box-border">
      <Login />
    </View>
  );
}
