import { Image, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../contexts/theme_context";

interface UserDetailsHeaderProps {
  username: string;
  bio: string;
  profilePic: string;
}

export function UserDetailsHeader({
  username,
  bio,
  profilePic,
}: UserDetailsHeaderProps) {
  const { textStyles, colors } = useTheme();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: profilePic,
        }}
        style={styles.profilePic}
      />
      <View style={{ width: 18 }} />
      <View>
        <Text style={textStyles.titleExtraLarge}>{username}</Text>
        <Text style={{ ...textStyles.labelSmall, color: colors.fadedText }}>
          {bio}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 62,
    height: 62,
    borderRadius: 1000,
  },
});
