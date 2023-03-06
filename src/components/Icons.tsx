import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const HomeActiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={24} color="#0c4a6e" />
    </View>
  );
};

export const HomeInactiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={24} color="#0c4a6e" />
    </View>
  );
};

export const PersonalInfoActiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="person" size={24} color="#0c4a6e" />
    </View>
  );
};

export const PersonalInfoInactiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="person-outline" size={24} color="#0c4a6e" />
    </View>
  );
};

export const SkillsActiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="desktop" size={24} color="#0c4a6e" />
    </View>
  );
};

export const SkillsInactiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="desktop-outline" size={24} color="#0c4a6e" />
    </View>
  );
};

export const ExperienceActiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="briefcase" size={24} color="#0c4a6e" />
    </View>
  );
};

export const ExperienceInactiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="briefcase-outline" size={24} color="#0c4a6e" />
    </View>
  );
};

export const EducationActiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="school" size={24} color="#0c4a6e" />
    </View>
  );
};

export const EducationInactiveIcon = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="school-outline" size={24} color="#0c4a6e" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
});
