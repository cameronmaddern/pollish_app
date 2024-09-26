import { StyleSheet, TextInput, TextStyle } from "react-native";
import { useTheme } from "../../contexts/theme_context";

interface AppTextInputProps {
  placeholder: string;
  valueSetter: (text: string) => void;
  value: string;
  isSecure?: boolean;
  textStyling?: TextStyle;
  maxLength?: number;
}

export function AppTextInput({
  placeholder,
  valueSetter,
  textStyling,
  value,
  maxLength,
  isSecure = false,
}: AppTextInputProps) {
  const { colors } = useTheme();

  return (
    <TextInput
      style={{
        ...textStyling,
        ...styles.textInput,
        backgroundColor: colors.fadedOnPrimary,
      }}
      maxLength={maxLength ?? 30}
      value={value}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      onChangeText={(text) => valueSetter(text)}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 52,
    padding: 18,
    borderRadius: 20,
  },
});
