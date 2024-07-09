import {
  AuthUser,
  autoSignIn,
  confirmSignUp,
  getCurrentUser,
  resendSignUpCode,
  signIn,
  signOut,
  signUp,
} from "aws-amplify/auth";
import { ReactNode, createContext, useContext, useState } from "react";
import { LOGIN_FAILURE_MESSAGE } from "../../assets/constants/app_constants";
import { User } from "../API";
import { UserService } from "../services/user_service";

interface SignupActionProps {
  username: string;
  password: string;
  email: string;
}

interface LoginActionProps {
  username: string;
  password: string;
}

interface ConfirmSignupActionProps {
  confirmationCode: string;
}

interface ActionResponse {
  success: boolean;
  message?: string;
}

interface LoginResponse extends ActionResponse {
  requiresVerification: boolean;
}

interface AuthContextType {
  openLoginPopup: () => void;
  signupAction: ({
    username,
    password,
    email,
  }: SignupActionProps) => Promise<ActionResponse>;
  confirmSignupAction: ({
    confirmationCode,
  }: ConfirmSignupActionProps) => Promise<ActionResponse>;
  loginAction: ({
    username,
    password,
  }: LoginActionProps) => Promise<LoginResponse>;
  getAuthenticatedUser: () => Promise<AuthUser | null>;
  logoutAction: () => Promise<boolean>;
  showLoginPopup: boolean;
  closeLoginPopup: () => void;
  user: User | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [usernameForVerification, setUsernameForVerification] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const confirmSignupAction = async ({
    confirmationCode,
  }: ConfirmSignupActionProps) => {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: usernameForVerification,
        confirmationCode,
      });
      console.log("confirmSignup: ", isSignUpComplete, nextStep);
    } catch (error) {
      console.log("error confirming sign up:", error);
      return { success: false, message: `${error}` };
    }

    try {
      const signInOutput = await autoSignIn();

      await checkAndOrCreateUserObject();

      console.log(signInOutput);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false, message: `${error}` };
    }
  };

  const signupAction = async ({
    username,
    password,
    email,
  }: SignupActionProps) => {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: {
            authFlowType: "USER_PASSWORD_AUTH",
          },
        },
      });

      setUsernameForVerification(username);
      console.log("signup: ", isSignUpComplete, userId, nextStep);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false, message: `${error}` };
    }
  };

  const loginAction = async ({
    username,
    password,
  }: LoginActionProps): Promise<LoginResponse> => {
    try {
      const signInOutput = await signIn({
        username,
        password,
        options: {
          autoSignIn: {
            authFlowType: "USER_PASSWORD_AUTH",
          },
          authFlowType: "USER_PASSWORD_AUTH",
        },
      });
      if (signInOutput.nextStep.signInStep === "CONFIRM_SIGN_UP") {
        setUsernameForVerification(username);
        await resendSignUpCode({ username });
        return { success: true, requiresVerification: true };
      }

      await checkAndOrCreateUserObject();

      return { success: true, requiresVerification: false };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        requiresVerification: false,
        message: `${error}`,
      };
    }
  };

  const getAuthenticatedUser = async () => {
    try {
      const res = await getCurrentUser();
      return res;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const logoutAction = async () => {
    try {
      await signOut();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const checkAndOrCreateUserObject = async () => {
    const userDetails = await getCurrentUser();

    if (userDetails) {
      try {
        const fetchedUser = await UserService.fetchUser(userDetails.userId);
        if (fetchedUser) {
          setUser(fetchedUser);
          return { success: true, requiresVerification: false };
        } else {
          const newUser = await UserService.createNewUser(
            userDetails.username,
            userDetails.userId
          );
          setUser(newUser);
          return { success: true, requiresVerification: false };
        }
      } catch (error) {
        console.log(error);
        return {
          success: false,
          requiresVerification: false,
          message: LOGIN_FAILURE_MESSAGE,
        };
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        openLoginPopup,
        signupAction,
        confirmSignupAction,
        loginAction,
        getAuthenticatedUser,
        logoutAction,
        showLoginPopup,
        closeLoginPopup,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
