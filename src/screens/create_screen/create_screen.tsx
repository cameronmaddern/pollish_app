import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  CREATE_IMAGE_BACK,
  CREATE_IMAGE_HEADING,
  CREATE_IMAGE_HIGHLIGHT,
  CREATE_IMAGE_SUBHEADING,
  CREATE_NEXT,
  CREATE_PREVIEW_BACK,
  CREATE_PREVIEW_HEADING,
  CREATE_PREVIEW_HIGHLIGHT,
  CREATE_PREVIEW_SUBHEADING,
  CREATE_TEXT_OPTION_BACK,
  CREATE_TEXT_OPTION_HEADING,
  CREATE_TEXT_OPTION_HIGHLIGHT,
  CREATE_TEXT_OPTION_SUBHEADING,
  CREATE_TITLE_BACK,
  CREATE_TITLE_HEADING,
  CREATE_TITLE_HIGHLIGHT,
  CREATE_TITLE_PLACEHOLDER,
  CREATE_TITLE_SUBHEADING,
} from "../../../assets/constants/app_constants";
import { BackIcon } from "../../../assets/svg";
import { AppButton, AppTextInput } from "../../components";
import { useTheme } from "../../contexts/theme_context";
import { AddImage } from "./components/add_image";
import { AddTextOptions } from "./components/add_text_options";
import { PreviewPoll } from "./components/preview_poll";
import { TitleWithHeader } from "./components/title_with_header";

export function CreateScreen() {
  const { colors } = useTheme();
  const [progressIndex, setProgressIndex] = useState(0);
  const [image, setImage] = useState<null | string>(null);
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const navigation = useNavigation();

  const stageText = [
    {
      back: CREATE_TITLE_BACK,
      heading: CREATE_TITLE_HEADING,
      highlight: CREATE_TITLE_HIGHLIGHT,
      subheading: CREATE_TITLE_SUBHEADING,
    },
    {
      back: CREATE_IMAGE_BACK,
      heading: CREATE_IMAGE_HEADING,
      highlight: CREATE_IMAGE_HIGHLIGHT,
      subheading: CREATE_IMAGE_SUBHEADING,
    },
    {
      back: CREATE_TEXT_OPTION_BACK,
      heading: CREATE_TEXT_OPTION_HEADING,
      highlight: CREATE_TEXT_OPTION_HIGHLIGHT,
      subheading: CREATE_TEXT_OPTION_SUBHEADING,
    },
    {
      back: CREATE_PREVIEW_BACK,
      heading: CREATE_PREVIEW_HEADING,
      highlight: CREATE_PREVIEW_HIGHLIGHT,
      subheading: CREATE_PREVIEW_SUBHEADING,
    },
  ];

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
              placeholder={CREATE_TITLE_PLACEHOLDER}
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
          backgroundColor={colors.primary}
          text={CREATE_NEXT}
          action={() => {
            setProgressIndex(progressIndex + 1);
          }}
          textColor={colors.contrastLowest}
        />
      </View>
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
