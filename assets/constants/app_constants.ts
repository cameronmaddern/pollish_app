//TODO: Update to support localization, why do all the solutions have magic strings????? seems awful

export class AppConstants {
  static readonly HOME_TAB = "Home";
  static readonly SEARCH_TAB = "Search";
  static readonly CREATE_TAB = "Create";
  static readonly TAGS_TAB = "Tags";
  static readonly PROFILE_TAB = "ProfileStack";

  static readonly CHAT = "Chat";
  static readonly CLOSE = "Close";

  static readonly APP_NAME_P1 = "poll";
  static readonly APP_NAME_P2 = "ish";

  static readonly LOGIN_POPUP_TITLE = "Create an account";
  static readonly LOGIN_POPUP_CONTENT =
    "Sign up to join the conversation! Vote, comment, create and share on Pollish!";

  static readonly LOGIN_OR = "or";
  static readonly LOGIN_LOGIN = "Login";
  static readonly LOGIN_SIGNUP = "Signup";
  static readonly LOGIN_WITH_GOOGLE = "Continue with Google";
  static readonly LOGIN_PROMPT_LOGIN = "Already have an account?";
  static readonly LOGIN_PROMPT_SIGNUP = "Don't have an account?";
  static readonly LOGIN_USERNAME_PLACEHOLDER = "Username";
  static readonly LOGIN_EMAIL_PLACEHOLDER = "Email";
  static readonly LOGIN_PASSWORD_PLACEHOLDER = "Password";
  static readonly LOGIN_INVALID_TITLE = "Invalid details";
  static readonly LOGIN_INVALID_POPUP_DISMISS = "Ok";
  static readonly LOGIN_VERIFY = "Verify";
  static readonly LOGIN_VERIFY_PLACEHOLDER = "Enter verification code";
  static readonly LOGIN_FAILURE_MESSAGE =
    "We failed to log you in, please check your connection and try again";

  static readonly PROFILE_LOGOUT = "Logout";

  static readonly POLL_EXPLORE = "Explore Topics";
  static readonly POLL_TRACK = "Track this poll";
  static readonly POLL_ACTION = "Action";
  static readonly POLL_REPORT = "Report";
  static readonly POLL_DELETE = "Delete";
  static readonly POLL_WATCH = "Watch";
  static readonly POLL_WATCHING = "Watching";

  static readonly CREATE_POLL_POPUP_STANDARD = "Standard Poll";
  static readonly CREATE_POLL_POPUP_IMAGE = "Image Poll";
  static readonly CREATE_POLL_POPUP_TEXT = "Text Poll";
  static readonly CREATE_POLL_POPUP_TITLE = "Create a Poll";
  static readonly CREATE_POLL_POPUP_CONTENT =
    "Be heard. Settle that debate. Find out what others think.";

  static readonly CREATE_NEXT = "Next";
  static readonly CREATE_TITLE_PLACEHOLDER = "Add a title...";
  static readonly CREATE_PREVIEW_SUBHEADING =
    "Review your poll and let's publish!";
  static readonly CREATE_PREVIEW_HIGHLIGHT = "Preview";
  static readonly CREATE_PREVIEW_HEADING = "Here is a ";
  static readonly CREATE_PREVIEW_BACK = "Back to Options";
  static readonly CREATE_IMAGE_SUBHEADING =
    "Your polls look better with pictures, add one.";
  static readonly CREATE_IMAGE_HIGHLIGHT = "Image";
  static readonly CREATE_IMAGE_HEADING = "Style it with an ";
  static readonly CREATE_IMAGE_BACK = "Back to Title";
  static readonly CREATE_TEXT_OPTION_SUBHEADING =
    "What are the options? You can add up to 4.";
  static readonly CREATE_TEXT_OPTION_HIGHLIGHT = "Options";
  static readonly CREATE_TEXT_OPTION_HEADING = "Let's add some ";
  static readonly CREATE_TEXT_OPTION_BACK = "Back to Image";
  static readonly CREATE_TEXT_OPTION_ADD = "Add option";
  static readonly CREATE_TEXT_OPTION_PLACEHOLDER = "Empty option...";
  static readonly CREATE_TITLE_SUBHEADING =
    "What's on your mind? Ask that burning question!";
  static readonly CREATE_TITLE_HIGHLIGHT = "Title";
  static readonly CREATE_TITLE_HEADING = "Give your poll a ";
  static readonly CREATE_TITLE_BACK = "Back";
  static readonly CREATE_IMAGE_LIBRARY_ICON = "Image Library";
  static readonly CREATE_IMAGE_CAMERA_ICON = "Camera";
  static readonly CREATE_IMAGE_REMOVE = "Remove Image";
  static readonly CREATE_POLL_INVALID_DISMISS = "Ok";
  static readonly CREATE_POLL_FAILURE_MESSAGE =
    "We failed to create your poll, please check your connection and try again";
  static readonly CREATE_POLL_INVALID_TITLE = "Poll creation failed";

  static readonly PROFILE_NO_USER = "no_user";
  static readonly PROFILE_FOLLOWERS = "Followers";
  static readonly PROFILE_FOLLOWING = "Following";
  static readonly PROFILE_POLLS = "Polls";
  static readonly PROFILE_TOPICS = "Topics";
  static readonly PROFILE_WATCHING = "Watching";
  static readonly PROFILE_ACTIVITY = "Activity";
  static readonly PROFILE_PROFILE = "Profile";
  static readonly PROFILE_NOTIFICATIONS = "Notifications";
  static readonly PROFILE_HELP = "Help";
  static readonly PROFILE_LICENSE = "License";
  static readonly PROFILE_SETTINGS = "Settings";
  static readonly PROFILE_SCORE = "Score";
  static readonly PROFILE_FAILED_UPDATE_PROFILE_PIC =
    "We failed to update your profile image, please check your connection and try again";
}
