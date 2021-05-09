import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import HomePage from "../pages/HomePage";
import ModalPage from "../pages/ModalPage";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomePage} />
    </MainStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator mode={"modal"}
                         screenOptions={{
                           headerShown: false,
                           gestureEnabled: true,
                           cardOverlayEnabled: true,
                           ...TransitionPresets.ModalPresentationIOS,
                         }}>
      <RootStack.Screen name="Main" component={MainNavigator} />
      <RootStack.Screen name="Modal" component={ModalPage} />
    </RootStack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
