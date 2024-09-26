import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../contexts/theme_context";

interface AppButtonProps {
  backgroundColor: string;
  borderColor?: string;
  textColor: string;
  text: string;
  action: () => void | Promise<void>;
  icon?: React.JSX.Element | null;
  disabled?: boolean;
}

export function AppButton({
  action,
  backgroundColor,
  borderColor = "",
  textColor,
  text,
  icon,
  disabled = false,
}: AppButtonProps) {
  const { textStyles } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        await action();
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor,
        borderColor,
        borderWidth: borderColor != "" ? 1 : 0,
      }}
      onPress={handlePress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {icon}
          {icon != null && <View style={{ width: 10 }} />}
          <Text style={{ ...textStyles.bodyMedium, color: textColor }}>
            {text}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
