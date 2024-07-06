import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React from "react";
import { useCallback } from "react";
import { StyleSheet, Text } from "react-native";

interface MoreBottomSheetProps {
  openModalId: string | null;
}

export const MoreBottomSheet = React.forwardRef<
  BottomSheet,
  MoreBottomSheetProps
>(({ openModalId }, ref) => {
  const snapPoints = ["75%"];

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
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Poll ID: {openModalId}</Text>
      </BottomSheetView>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default MoreBottomSheet;
