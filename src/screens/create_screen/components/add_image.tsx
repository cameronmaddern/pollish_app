import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppConstants } from "../../../../assets/constants/app_constants";
import { CameraIcon } from "../../../../assets/svg/camera_icon";
import { DeleteIcon } from "../../../../assets/svg/delete_icon";
import { ImageLibraryIcon } from "../../../../assets/svg/image_library_icon";
import { AppButton } from "../../../components";
import { useTheme } from "../../../contexts/theme_context";

interface AddImageProps {
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AddImage = ({ image, setImage }: AddImageProps) => {
  const { colors, textStyles } = useTheme();

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (image) {
    return (
      <>
        <Image
          style={styles.image}
          source={{ uri: image }}
          resizeMode="cover"
        />
        <View style={{ height: 10 }} />
        <AppButton
          icon={<DeleteIcon size={22} color={colors.contrastHighest} />}
          action={() => setImage(null)}
          backgroundColor={colors.fadedOnPrimary}
          text={AppConstants.CREATE_IMAGE_REMOVE}
          textColor={colors.contrastHighest}
        />
      </>
    );
  } else {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            ...styles.touchableContainer,
            backgroundColor: colors.fadedOnPrimary,
          }}
          onPress={pickImage}
        >
          <ImageLibraryIcon size={36} />
          <View style={{ height: 6 }} />
          <Text style={{ ...textStyles.labelSmall, color: colors.fadedText }}>
            {AppConstants.CREATE_IMAGE_LIBRARY_ICON}
          </Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity
          style={{
            ...styles.touchableContainer,
            backgroundColor: colors.fadedOnPrimary,
          }}
        >
          <CameraIcon size={36} />
          <View style={{ height: 6 }} />
          <Text style={{ ...textStyles.labelSmall, color: colors.fadedText }}>
            {AppConstants.CREATE_IMAGE_CAMERA_ICON}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  touchableContainer: {
    height: 100,
    width: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 360,
    height: 215,
    borderRadius: 10,
  },
});
