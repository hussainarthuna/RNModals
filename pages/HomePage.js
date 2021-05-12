import React, { useState } from "react";
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const HomePage = (props) => {

  const { navigate } = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <View style={styles.screen}>
        <Button title={"Open iOS 13 Modal"} onPress={() => {
          navigate("Modal");
        }} />
      </View>
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={toggleModal} />

        <Modal
          isVisible={isModalVisible}
          useNativeDriver={true}
          style={{ margin: 0, justifyContent: "flex-end" }}
          swipeDirection={"up"}
          onBackdropPress={toggleModal}
          onSwipeComplete={() => toggleModal()}
          propagateSwipe={true}
          hideModalContentWhileAnimating={true}>
          <View style={{ padding: 16, backgroundColor: "white", borderRadius: 10, minHeight: Dimensions.get("screen").height / 1.5 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    </>
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
