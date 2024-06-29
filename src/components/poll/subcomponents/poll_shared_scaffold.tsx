import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "../../../contexts/theme_context";
import { MoreIcon, TimerIcon, ChatIcon } from "../../../../assets/svg";
import * as Constants from "../../../../assets/constants/app_constants";
import { PollSharedData } from "../entities";

type PollSharedScaffoldProps = {
  children: React.ReactNode;
  pollSharedData: PollSharedData;
};

export const PollSharedScaffold: React.FC<PollSharedScaffoldProps> = ({
  children,
  pollSharedData,
}) => {
  const { textStyles, colors } = useTheme();

  return (
    <View
      style={{
        ...styles.pollContainer,
        backgroundColor: colors.contrastLowest,
      }}
    >
      <View style={styles.genericContainer}>
        <Image
          source={{
            uri: pollSharedData.profileImage,
          }}
          style={styles.profileImage}
        />
        <View style={{ width: 8 }} />
        <Text style={textStyles.bodyMedium}>{pollSharedData.username}</Text>
        <View style={{ flex: 1 }} />
        <MoreIcon color={colors.textMuted} size={20} />
      </View>
      {children}
      <View style={styles.genericContainer}>
        {/* TODO: Implement action on press */}
        <View style={styles.rowCenterAligned}>
          <TimerIcon size={28} color={colors.text} />
          <View style={{ width: 4 }} />
          <Text style={{ ...textStyles.bodyMedium, color: colors.text }}>
            {pollSharedData.timeRemaining}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
        {/* TODO: Implement action on press */}
        <View style={styles.rowCenterAligned}>
          <ChatIcon size={28} color={colors.text} />
          <View style={{ width: 4 }} />
          <Text style={{ ...textStyles.bodyMedium, color: colors.text }}>
            {Constants.CHAT}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pollContainer: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 1000,
  },
  genericContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
  },
});
