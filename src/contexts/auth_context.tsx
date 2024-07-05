import { ReactNode, createContext, useContext, useState } from "react";
import { LoginPopup } from "../modals";
import { autoSignIn, confirmSignUp, signIn, signUp } from "aws-amplify/auth";

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
  }: LoginActionProps) => Promise<ActionResponse>;
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

  const openLoginPopup = () => {
    setShowLoginPopup(true);
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

  const loginAction = async ({ username, password }: LoginActionProps) => {
    try {
      const signInOutput = await signIn({
        username,
        password,
      });
      console.log(signInOutput);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false, message: `${error}` };
    }
  };

  return (
    <AuthContext.Provider
      value={{ openLoginPopup, signupAction, confirmSignupAction, loginAction }}
    >
      <LoginPopup
        visible={showLoginPopup}
        onClose={() => setShowLoginPopup(false)}
      />
      {children}
    </AuthContext.Provider>
  );
}
