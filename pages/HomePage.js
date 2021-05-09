import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomePage = (props) => {

  const { navigate } = useNavigation();

  return (
    <View style={styles.screen}>
      <Button title={"Open iOS 13 Modal"} onPress={() => {
        navigate("Modal");
      }} />
      <Button title={"Open Modal"} onPress={() => {
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomePage;
