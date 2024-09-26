import { generateClient } from "aws-amplify/api";
import { getUrl, uploadData } from "aws-amplify/storage";
import { v4 as uuidv4 } from "uuid";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";

const client = generateClient();

export class UserService {
  static async createNewUser(username: string, userId: string) {
    const createUserData = await client.graphql({
      query: mutations.createUser,
      variables: {
        input: {
          id: userId,
          username: username,
        },
      },
      authMode: "oidc",
    });

    return createUserData.data.createUser;
  }

  static async fetchUser(userId: string) {
    try {
      const userData = await client.graphql({
        query: queries.getUser,
        variables: {
          id: userId,
        },
        authMode: "oidc",
      });

      const foundUser = userData.data.getUser;

      if (foundUser && foundUser.profilePic) {
        const retreiveProfilePicFromS3 = await getUrl({
          path: foundUser.profilePic,
        });

        foundUser.profilePic = retreiveProfilePicFromS3.url.href;
      }

      return foundUser ?? null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async updateProfilePic(userId: string, profilePicUri: string) {
    try {
      const profilePicResponse = await fetch(profilePicUri);
      const blob = await profilePicResponse.blob();
      const profilePicPath = "public/profilepics/" + uuidv4();

      const res = await uploadData({
        path: profilePicPath,
        data: blob,
      }).result;

      const updateProfilePicData = await client.graphql({
        query: mutations.updateUser,
        variables: {
          input: {
            id: userId,
            profilePic: profilePicPath,
          },
        },
        authMode: "oidc",
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
