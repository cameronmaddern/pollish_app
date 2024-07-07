import { StyleSheet, TextInput } from "react-native";
import { useTheme } from "../../contexts/theme_context";

interface AppTextInputProps {
  placeholder: string;
  valueSetter: (text: string) => void;
  isSecure?: boolean;
}

export function AppTextInput({
  placeholder,
  valueSetter,
  isSecure = false,
}: AppTextInputProps) {
  const { colors } = useTheme();
  return (
    <TextInput
      style={{
        ...styles.textInput,
        backgroundColor: colors.fadedOnPrimary,
      }}
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
