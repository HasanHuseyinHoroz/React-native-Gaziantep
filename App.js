import * as React from "react";
import { StatusBar } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import Tarih from "./src/view/tarih";
import Yemek from "./src/view/yemek";
import Gaziantep from "./src/view/gaziantep";
import Giris from "./src/view/giris";

const Stack = createNativeStackNavigator();
function GaziantepStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gaziante" component={Gaziantep} />
      <Stack.Screen name="Giris" component={Giris} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function Tab2() {
  return (
    <>
      <StatusBar backgroundColor="#54CBFF" barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Gaziantep"
            component={GaziantepStack}
            options={{
              tabBarIcon: (props) => <Ionic name="ios-home" {...props} />,
            }}
            
          />
          <Tab.Screen
            name="Tarih"
            component={Tarih}
            options={{
              tabBarIcon: (props) => <Ionic name="book" {...props} />,
            }}
            
          />
          <Tab.Screen
            name="Yemek"
            component={Yemek}
            options={{
              tabBarIcon: (props) => <Ionic name="fast-food" {...props} />,
            }}
            
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Tab2;
