import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { EditIcon } from "../../../../assets/svg/edit_icon";
import { useAuth } from "../../../contexts/auth_context";
import { useTheme } from "../../../contexts/theme_context";

interface UserDetailsHeaderProps {
  username: string;
  bio: string;
}

export function UserDetailsHeader({ username, bio }: UserDetailsHeaderProps) {
  const { textStyles, colors } = useTheme();
  const { user, updateUserProfilePic } = useAuth();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 0.8,
      });

      if (!result.canceled) {
        const response = await updateUserProfilePic({
          profilePicUri: result.assets[0].uri,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  if (!user) {
    throw new Error("User should not be null, inside authenticated component");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity disabled={loading} onPress={pickImage}>
        <View
          style={{
            ...styles.profilePic,
            backgroundColor: colors.contrastMedium,
          }}
        >
          <Text style={{ ...textStyles.appName, color: colors.contrastLowest }}>
            {user.username.substring(0, 2)}
          </Text>
        </View>
        {user!.profilePic && (
          <Image
            source={{
              uri: user.profilePic,
            }}
            style={{ ...styles.profilePic, position: "absolute" }}
          />
        )}
        <View
          style={{
            ...styles.editContainer,
            backgroundColor: colors.contrastMediumLowTransparency,
          }}
        >
          <EditIcon size={14} color={colors.contrastLowest} />
        </View>
        {loading && (
          <View
            style={{
              ...styles.profilePic,
              position: "absolute",
            }}
          >
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        )}
      </TouchableOpacity>
      <View style={{ width: 18 }} />
      <View>
        <Text style={textStyles.titleExtraLarge}>{user!.username}</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  editContainer: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 1000,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});
