import React from "react";
import { View, StyleSheet, Text } from "react-native";
// My components
import {
  HomeActiveIcon,
  HomeInactiveIcon,
  PersonalInfoActiveIcon,
  PersonalInfoInactiveIcon,
  SkillsActiveIcon,
  SkillsInactiveIcon,
  ExperienceActiveIcon,
  ExperienceInactiveIcon,
  EducationActiveIcon,
  EducationInactiveIcon,
} from "./Icons";

interface tabIconProps {
  screen: string;
  focused: boolean;
}

const TabBarIcon = (props: tabIconProps) => {
  return (
    <>
      {props.screen === "Home" ? (
        <View style={styles.container}>
          {props.focused ? <HomeActiveIcon /> : <HomeInactiveIcon />}
          <Text style={styles.title}>Home</Text>
        </View>
      ) : props.screen === "PersonalInfo" ? (
        <View style={styles.container}>
          {props.focused ? (
            <PersonalInfoActiveIcon />
          ) : (
            <PersonalInfoInactiveIcon />
          )}
          <Text style={styles.title}>Personal Info</Text>
        </View>
      ) : props.screen === "Skills" ? (
        <View style={styles.container}>
          {props.focused ? <SkillsActiveIcon /> : <SkillsInactiveIcon />}
          <Text style={styles.title}>Skills</Text>
        </View>
      ) : props.screen === "Experience" ? (
        <View style={styles.container}>
          {props.focused ? (
            <ExperienceActiveIcon />
          ) : (
            <ExperienceInactiveIcon />
          )}
          <Text style={styles.title}>Experience</Text>
        </View>
      ) : props.screen === "Education" ? (
        <View style={styles.container}>
          {props.focused ? <EducationActiveIcon /> : <EducationInactiveIcon />}
          <Text style={styles.title}>Education</Text>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
  },
  title: {
    fontSize: 12,
    color: "#0c4a6e",
    marginTop: 2,
  },
});

export default TabBarIcon;
