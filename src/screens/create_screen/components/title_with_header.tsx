import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../contexts/theme_context";

interface TitleWithHeaderProps {
  heading: string;
  highlight: string;
  subheading: string;
  progress: number;
}

export const TitleWithHeader = ({
  heading,
  highlight,
  subheading,
  progress,
}: TitleWithHeaderProps) => {
  const { textStyles, colors } = useTheme();

  const FilledCircle = () => {
    return (
      <View
        style={{
          ...styles.progressCircle,
          backgroundColor: colors.primary,
        }}
      />
    );
  };

  const EmptyCircle = () => {
    return (
      <View
        style={{
          ...styles.progressCircle,
          backgroundColor: colors.primaryFaded,
          borderColor: colors.primary,
          borderWidth: 1,
        }}
      />
    );
  };

  return (
    <>
      <View style={{ flexDirection: "row" }}>
        <FilledCircle />
        <View style={{ width: 14 }} />
        {progress > 0 ? <FilledCircle /> : <EmptyCircle />}
        <View style={{ width: 14 }} />
        {progress > 1 ? <FilledCircle /> : <EmptyCircle />}
        <View style={{ width: 14 }} />
        {progress > 2 ? <FilledCircle /> : <EmptyCircle />}
      </View>
      <View style={{ height: 50 }} />
      <Text style={textStyles.titleLarge}>
        {heading}
        <Text style={{ color: colors.primary }}>{highlight}</Text>
      </Text>
      <View style={{ height: 12 }} />
      <Text style={textStyles.bodyMedium}>{subheading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  progressCircle: {
    height: 13,
    width: 13,
    borderRadius: 1000,
  },
});
