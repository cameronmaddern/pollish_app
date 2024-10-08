import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { AppConstants } from "../../assets/constants/app_constants";
import { EyeClosedIcon, EyeOpenIcon } from "../../assets/svg";
import { AppButton } from "../components/shared/app_button";
import { useModal } from "../contexts/more_modal_context";
import { useTheme } from "../contexts/theme_context";

export const MoreBottomSheet = () => {
  const snapPoints = Platform.select({
    ios: [520],
    android: [560],
  });
  const { textStyles, colors } = useTheme();
  const [isWatching, setIsWatching] = useState<boolean>(false);
  const { closeModal, openModalTitle, openModalTopics, moreModalRef } =
    useModal();

  // callbacks
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  // renders
  return (
    <BottomSheet
      ref={moreModalRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={textStyles.titleLarge}>{openModalTitle}</Text>
        </View>
        <View style={[styles.childContainer]}>
          <Text style={textStyles.labelLargeProminent}>
            {AppConstants.POLL_EXPLORE}
          </Text>
          <View style={styles.buttonContainer}>
            {openModalTopics &&
              openModalTopics.map((topic: string, idx: number) => (
                <AppButton
                  key={idx}
                  backgroundColor=""
                  borderColor={colors.mutedButtonStroke}
                  text={topic}
                  textColor={colors.text}
                  action={() => console.log(`The topic ${topic} was pressed`)}
                />
              ))}
          </View>
        </View>
        <View style={[styles.childContainer]}>
          <Text style={textStyles.labelLargeProminent}>
            {AppConstants.POLL_TRACK}
          </Text>
          <View style={styles.buttonContainer}>
            <AppButton
              icon={
                isWatching ? (
                  <EyeOpenIcon color={colors.background} size={24} />
                ) : (
                  <EyeClosedIcon color={colors.primary} size={24} />
                )
              }
              backgroundColor={isWatching ? colors.primary : colors.background}
              borderColor={isWatching ? "" : colors.primary}
              text={
                isWatching
                  ? AppConstants.POLL_WATCHING
                  : AppConstants.POLL_WATCH
              }
              textColor={isWatching ? colors.contrastLowest : colors.primary}
              action={() => setIsWatching(!isWatching)}
            />
          </View>
        </View>
        <View style={[styles.childContainer, styles.actionContainer]}>
          <Text style={textStyles.labelLargeProminent}>
            {AppConstants.POLL_ACTION}
          </Text>
          <View style={styles.buttonContainer}>
            <AppButton
              backgroundColor={colors.mutedButtonBackground}
              borderColor={colors.mutedButtonStroke}
              textColor={colors.text}
              text={AppConstants.POLL_REPORT}
              action={() => console.log("Poll reported")}
            />
            <AppButton
              backgroundColor={colors.strongButtonBackground}
              textColor={colors.background}
              text={AppConstants.POLL_DELETE}
              action={() => console.log("Poll deleted")}
            />
          </View>
        </View>
        <View style={[styles.childContainer, styles.closeContainer]}>
          <AppButton
            backgroundColor={colors.background}
            borderColor={colors.mutedButtonStroke}
            text={AppConstants.CLOSE}
            textColor={colors.text}
            action={() => closeModal()}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    width: "100%",
    padding: 12,
    rowGap: 6,
  },
  childContainer: {
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    marginVertical: 12,
  },
  actionContainer: {},
  closeContainer: {
    marginTop: 14,
  },
  buttonContainer: {
    marginVertical: 6,
    width: "100%",
    rowGap: 8,
  },
});

export default MoreBottomSheet;
