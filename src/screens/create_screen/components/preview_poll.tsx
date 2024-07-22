import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../contexts/theme_context";

interface PreviewPollProps {
  title: string;
  options: string[];
  image: string;
}

export const PreviewPoll = ({ title, options, image }: PreviewPollProps) => {
  const { textStyles, colors } = useTheme();

  return (
    <View
      style={{
        ...styles.previewContainer,
        borderColor: colors.contrastLow,
      }}
    >
      <Image style={styles.image} source={{ uri: image }} resizeMode="cover" />
      <View style={{ height: 18 }} />
      <Text style={{ ...textStyles.bodyMedium, width: 293 }}>{title}</Text>
      <View style={{ height: 13 }} />
      {options.map((option, index) => (
        <View key={index}>
          <View
            style={{
              ...styles.optionContainer,
              borderColor: colors.mutedButtonStroke,
            }}
          >
            <Text style={textStyles.labelSmall}>{option}</Text>
          </View>
          {index < options.length - 1 && <View style={{ height: 7 }} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    paddingTop: 10,
    paddingBottom: 15,
    width: 320,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 306,
    height: 173,
    borderRadius: 10,
  },
  optionContainer: {
    borderRadius: 15,
    borderWidth: 0.8,
    width: 295,
    height: 42,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
});
