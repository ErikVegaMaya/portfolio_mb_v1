import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QueryClient, QueryClientProvider } from "react-query";
// My components
import TabBarIcon from "../components/TabBarIcon";
// Screens
import Home from "../screens/Home";
import PersonalInfo from "../screens/PersonalInfo";
import ListSkills from "../screens/skills/ListSkills";
import ListExperience from "../screens/experience/ListExperience";
import ListEducation from "../screens/education/ListEducation";
import LoginNavigator from "./LoginNavigator";

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => TabBarIcon({ focused, screen: "Home" }),
        }}
      />
      <Tab.Screen
        name="PersonalInfo"
        component={PersonalInfo}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({ focused, screen: "PersonalInfo" }),
        }}
      />
      <Tab.Screen
        name="Skills"
        component={ListSkills}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({ focused, screen: "Skills" }),
        }}
      />
      <Tab.Screen
        name="Experience"
        component={ListExperience}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({ focused, screen: "Experience" }),
        }}
      />
      <Tab.Screen
        name="Education"
        component={ListEducation}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon({ focused, screen: "Education" }),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen
        name="LoginNavigator"
        component={LoginNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    paddingVertical: 2,
    backgroundColor: "#94a3b8",
  },
});

const MainApp = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <MainNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default MainApp;
