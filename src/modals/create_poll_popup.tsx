import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useCallback } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";

import { useNavigation } from "@react-navigation/native";
import {
  CREATE_POLL_POPUP_CONTENT,
  CREATE_POLL_POPUP_IMAGE,
  CREATE_POLL_POPUP_STANDARD,
  CREATE_POLL_POPUP_TEXT,
  CREATE_POLL_POPUP_TITLE,
} from "../../assets/constants/app_constants";
import { TabsStackProps } from "../../type";
import { useCreatePollModal } from "../contexts/create_poll_modal_context";
import { useTheme } from "../contexts/theme_context";

export function CreatePollPopup() {
  const snapPoints = Platform.select({
    ios: [660],
    android: [700],
  });
  const { colors, textStyles } = useTheme();
  const { closeModal, createPollModalRef } = useCreatePollModal();
  // TODO: This is being called from above the navigation stack, should be fixed when we convert bottom sheets to modals
  const navigation = useNavigation<TabsStackProps>();
  const shimmerCycleDuration = 2000;
  const shimmerColors = [
    colors.contrastLow,
    colors.fadedOnPrimary,
    colors.contrastLow,
  ];

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

  const ImagePlaceholder = () => {
    return (
      <ShimmerPlaceHolder
        shimmerColors={shimmerColors}
        shimmerStyle={{
          borderRadius: 10,
          width: 125,
          height: 75,
        }}
        duration={shimmerCycleDuration}
      />
    );
  };

  const OptionPlaceholder = () => {
    return (
      <ShimmerPlaceHolder
        shimmerColors={shimmerColors}
        shimmerStyle={{
          borderRadius: 5,
          width: 125,
          height: 20,
        }}
        duration={shimmerCycleDuration}
      />
    );
  };

  const TextPlaceholder = () => {
    return (
      <>
        <ShimmerPlaceHolder
          shimmerColors={shimmerColors}
          shimmerStyle={{
            borderRadius: 10,
            width: 125,
            height: 12,
          }}
          duration={shimmerCycleDuration}
        />
        <View style={{ height: 4 }} />
        <ShimmerPlaceHolder
          shimmerColors={shimmerColors}
          shimmerStyle={{
            borderRadius: 10,
            width: 99,
            height: 12,
          }}
          duration={shimmerCycleDuration}
        />
      </>
    );
  };

  const HeaderPlaceholder = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ShimmerPlaceHolder
          shimmerColors={shimmerColors}
          shimmerStyle={{
            borderRadius: 10,
            width: 16,
            height: 16,
          }}
          duration={shimmerCycleDuration}
        />
        <View style={{ width: 4 }} />
        <ShimmerPlaceHolder
          shimmerColors={shimmerColors}
          shimmerStyle={{
            borderRadius: 10,
            width: 48,
            height: 10,
          }}
          duration={shimmerCycleDuration}
        />
      </View>
    );
  };

  const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

  return (
    <BottomSheet
      ref={createPollModalRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.modalContainer}>
        <Text style={textStyles.titleLarge}>{CREATE_POLL_POPUP_TITLE}</Text>
        <View style={{ height: 12 }} />

        <Text
          style={{
            ...textStyles.bodyMedium,
            color: colors.contrastHigh,
            textAlign: "center",
          }}
        >
          {CREATE_POLL_POPUP_CONTENT}
        </Text>
        <View style={{ height: 24 }} />

        <View style={styles.rowContainer}>
          <View>
            <TouchableOpacity
              onPress={() => {
                //TODO: Update to pass type of poll to screen
                navigation.navigate("Create");
                closeModal();
              }}
              style={{
                ...styles.pollSkeletonContainer,
                height: 250,
                backgroundColor: colors.fadedOnPrimary,
                borderColor: colors.lightTextOnPrimary,
              }}
            >
              <HeaderPlaceholder />
              <View style={{ height: 4 }} />
              <ImagePlaceholder />
              <View style={{ height: 12 }} />
              <TextPlaceholder />
              <View style={{ height: 12 }} />
              <OptionPlaceholder />
              <View style={{ height: 5 }} />
              <OptionPlaceholder />
              <View style={{ height: 5 }} />
              <OptionPlaceholder />
            </TouchableOpacity>
            <View style={{ height: 8 }} />
            <Text
              style={{
                ...textStyles.bodyMedium,
                color: colors.contrastHigh,
                textAlign: "center",
              }}
            >
              {CREATE_POLL_POPUP_STANDARD}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                //TODO: Update to pass type of poll to screen
                navigation.navigate("Create");
                closeModal();
              }}
              style={{
                ...styles.pollSkeletonContainer,
                height: 250,
                backgroundColor: colors.fadedOnPrimary,
                borderColor: colors.lightTextOnPrimary,
              }}
            >
              <HeaderPlaceholder />
              <View style={{ height: 8 }} />
              <TextPlaceholder />
              <View style={{ height: 12 }} />
              <ImagePlaceholder />
              <View style={{ height: 6 }} />
              <ImagePlaceholder />
            </TouchableOpacity>
            <View style={{ height: 8 }} />
            <Text
              style={{
                ...textStyles.bodyMedium,
                color: colors.contrastHigh,
                textAlign: "center",
              }}
            >
              {CREATE_POLL_POPUP_IMAGE}
            </Text>
          </View>
        </View>
        <View style={{ height: 16 }} />
        <View>
          <TouchableOpacity
            onPress={() => {
              //TODO: Update to pass type of poll to screen
              navigation.navigate("Create");
              closeModal();
            }}
            style={{
              ...styles.pollSkeletonContainer,
              height: 192,
              backgroundColor: colors.fadedOnPrimary,
              borderColor: colors.lightTextOnPrimary,
            }}
          >
            <HeaderPlaceholder />
            <View style={{ height: 8 }} />
            <TextPlaceholder />
            <View style={{ height: 12 }} />
            <OptionPlaceholder />
            <View style={{ height: 5 }} />
            <OptionPlaceholder />
            <View style={{ height: 5 }} />
            <OptionPlaceholder />
            <View style={{ height: 5 }} />
            <OptionPlaceholder />
          </TouchableOpacity>
          <View style={{ height: 8 }} />
          <Text
            style={{
              ...textStyles.bodyMedium,
              color: colors.contrastHigh,
              textAlign: "center",
            }}
          >
            {CREATE_POLL_POPUP_TEXT}
          </Text>
        </View>
        <View style={{ height: 24 }} />
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 18,
    justifyContent: "space-between",
  },
  pollSkeletonContainer: {
    width: 149,
    borderRadius: 20,
    borderWidth: 1,
    padding: 12,
  },
  modalContainer: {
    alignItems: "center",
    width: "100%",
    padding: 12,
    paddingTop: 8,
  },
  childContainer: {
    width: "100%",
    alignItems: "center",
  },
});
