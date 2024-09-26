import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppConstants } from "../../../assets/constants/app_constants";
import { BackIcon } from "../../../assets/svg";
import { AppButton, AppTextInput } from "../../components";
import { LoadingOverlay } from "../../components/shared/loading_overlay";
import { useTheme } from "../../contexts/theme_context";
import { PollService } from "../../services/poll_service";
import { AddImage } from "./components/add_image";
import { AddTextOptions } from "./components/add_text_options";
import { PreviewPoll } from "./components/preview_poll";
import { TitleWithHeader } from "./components/title_with_header";

export function CreateScreen() {
  const { colors } = useTheme();

  // ProgressIndex -> 0: title, 1: image, 2: text options, 3: preview
  const [progressIndex, setProgressIndex] = useState(0);
  const [image, setImage] = useState<null | string>(null);
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const stageText = [
    {
      back: AppConstants.CREATE_TITLE_BACK,
      heading: AppConstants.CREATE_TITLE_HEADING,
      highlight: AppConstants.CREATE_TITLE_HIGHLIGHT,
      subheading: AppConstants.CREATE_TITLE_SUBHEADING,
    },
    {
      back: AppConstants.CREATE_IMAGE_BACK,
      heading: AppConstants.CREATE_IMAGE_HEADING,
      highlight: AppConstants.CREATE_IMAGE_HIGHLIGHT,
      subheading: AppConstants.CREATE_IMAGE_SUBHEADING,
    },
    {
      back: AppConstants.CREATE_TEXT_OPTION_BACK,
      heading: AppConstants.CREATE_TEXT_OPTION_HEADING,
      highlight: AppConstants.CREATE_TEXT_OPTION_HIGHLIGHT,
      subheading: AppConstants.CREATE_TEXT_OPTION_SUBHEADING,
    },
    {
      back: AppConstants.CREATE_PREVIEW_BACK,
      heading: AppConstants.CREATE_PREVIEW_HEADING,
      highlight: AppConstants.CREATE_PREVIEW_HIGHLIGHT,
      subheading: AppConstants.CREATE_PREVIEW_SUBHEADING,
    },
  ];

  const clearStates = () => {
    setImage(null);
    setTitle("");
    setOptions([]);
    setProgressIndex(0);
  };

  const uploadPoll = async () => {
    setLoading(true);
    var result = await PollService.createStandardPoll(image!, title, options);
    if (result) {
      navigation.goBack();
      clearStates();
    } else {
      Alert.alert(
        AppConstants.CREATE_POLL_INVALID_TITLE,
        AppConstants.CREATE_POLL_FAILURE_MESSAGE,
        [{ text: AppConstants.CREATE_POLL_INVALID_DISMISS }],
        {
          cancelable: false,
        }
      );
    }
    setLoading(false);
  };

  const canProgress = () => {
    switch (progressIndex) {
      case 0:
        return title.length > 0;
      case 1:
        return image != null;
      case 2:
        return options.length > 1;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.contrastLowest }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => {
            if (progressIndex > 0) {
              setProgressIndex(progressIndex - 1);
            } else {
              navigation.goBack();
            }
          }}
        >
          <BackIcon size={28} color={colors.contrastHigh} />
          <View style={{ width: 8 }} />
          <Text>{stageText[progressIndex].back}</Text>
        </TouchableOpacity>
        <View style={{ flex: 0.6 }} />
        <TitleWithHeader
          heading={stageText[progressIndex].heading}
          highlight={stageText[progressIndex].highlight}
          subheading={stageText[progressIndex].subheading}
          progress={progressIndex}
        />
        <View style={{ height: 26 }} />
        {progressIndex == 0 ? (
          <View style={styles.titleContainer}>
            <AppTextInput
              placeholder={AppConstants.CREATE_TITLE_PLACEHOLDER}
              textStyling={{ textAlign: "center" }}
              valueSetter={setTitle}
              value={title}
              maxLength={75}
            />
          </View>
        ) : progressIndex == 1 ? (
          <AddImage image={image} setImage={setImage} />
        ) : progressIndex == 2 ? (
          <AddTextOptions options={options} setOptions={setOptions} />
        ) : (
          <PreviewPoll image={image!} title={title} options={options} />
        )}
        <View style={{ flex: 1 }} />
        <AppButton
          backgroundColor={canProgress() ? colors.primary : colors.primaryFaded}
          text={AppConstants.CREATE_NEXT}
          disabled={!canProgress()}
          action={() => {
            if (progressIndex == 3) {
              uploadPoll();
            } else {
              setProgressIndex(progressIndex + 1);
            }
          }}
          textColor={colors.contrastLowest}
        />
      </View>
      {loading && <LoadingOverlay />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 8,
  },
  backContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
