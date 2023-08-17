import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ImagesApp } from "../assets/images";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  return (
    <SafeAreaView className="m-0 p-0">
      <View className="flex items-center justify-top">
        <Text className="text-4xl text-black text-center mt-10">Login Now</Text>
        <Image source={ImagesApp.imageLogin} className="mt-[100px]" />
        <Text className="text-[16px] text-[#757575] mt-10">
          Please enter the details below to continue.
        </Text>
        <TouchableOpacity style={styles.button}>
          <View className="flex items-center justify-center">
            <Image source={ImagesApp.iconGoogle} className="w-6 h-6" />
          </View>
          <View className="flex items-center justify-center">
            <Text>SIGN IN WITH GOOGLE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginTop: 50,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#fff",
  },
});
