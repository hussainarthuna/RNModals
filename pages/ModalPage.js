import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ModalPage = (props) => {

  const { goBack } = useNavigation();
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Text>iOS 13 Style Modal</Text>
      <Button title={"Push same iOS 13 Modal"} onPress={() => {
        navigation.push("Modal");
      }} />
      <Button title={"Dismiss"} onPress={() => {
        goBack();
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

export default ModalPage;
