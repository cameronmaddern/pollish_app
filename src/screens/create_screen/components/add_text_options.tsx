import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppConstants } from "../../../../assets/constants/app_constants";
import { DeleteIcon } from "../../../../assets/svg/delete_icon";
import { AppButton, AppTextInput } from "../../../components";
import { useTheme } from "../../../contexts/theme_context";

interface AddTextOptionsProps {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddTextOptions = ({
  options,
  setOptions,
}: AddTextOptionsProps) => {
  const { colors, textStyles } = useTheme();
  const [newOption, setNewOption] = useState("");

  return (
    <View style={{ paddingHorizontal: 8, width: "100%" }}>
      {options.length < 4 && (
        <>
          <AppTextInput
            placeholder={AppConstants.CREATE_TEXT_OPTION_PLACEHOLDER}
            textStyling={{ textAlign: "center" }}
            valueSetter={setNewOption}
            value={newOption}
            maxLength={36}
          />
          <View style={{ height: 12 }} />
          <AppButton
            backgroundColor={colors.primary}
            text={AppConstants.CREATE_TEXT_OPTION_ADD}
            action={() => {
              setOptions((prev) => [...prev, newOption]);
              setNewOption("");
            }}
            textColor={colors.contrastLowest}
          />
          <View style={{ height: 36 }} />
        </>
      )}
      {options.map((option, index) => (
        <View key={index}>
          <View
            style={{
              ...styles.optionContainer,
              borderColor: colors.fadedOnPrimary,
            }}
          >
            <View style={{ width: 24 }} />
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text style={{ ...textStyles.bodyMedium }}>{option}</Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                setOptions((prev) => prev.filter((_, i) => i != index))
              }
            >
              <DeleteIcon size={24} color={colors.contrastHighest} />
            </TouchableOpacity>
          </View>
          {index < options.length - 1 && <View style={{ height: 12 }} />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    width: "100%",
    borderRadius: 20,
    borderWidth: 1,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
  },
});
