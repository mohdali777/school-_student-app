import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {
  Icon:  any; 
  iconName:string,
  type?: string;
  name?: string;
  value: string;
  placeholder?: string;
  secure?: boolean;
  onChange: (text: string) => void;
}

export default function AuthInputRN({
  Icon,
  iconName,
  value,
  placeholder,
  secure = false,
  onChange
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon  name={iconName} width={20} height={20} color="#9ca3af" /> {/* gray-400 */}
      </View>

      <TextInput
        style={styles.input}
        secureTextEntry={secure}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 380,
    position: "relative",
    justifyContent: "center",
  },
  iconWrapper: {
    position: "absolute",
    left: 12,
    zIndex: 10
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingLeft: 42, // space for icon
    paddingRight: 12,
    borderWidth: 1,
    borderColor: "#d1d5db", // gray-300
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 14,
  }
});
