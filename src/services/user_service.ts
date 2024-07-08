import { generateClient } from "aws-amplify/api";
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
    const userData = await client.graphql({
      query: queries.getUser,
      variables: {
        id: userId,
      },
      authMode: "oidc",
    });

    return userData.data.getUser;
  }
}
