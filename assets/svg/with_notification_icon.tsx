import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

export function WithNotificationIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M21.1559 12.8335C21.8347 19.1049 24.5 21.0002 24.5 21.0002H3.5C3.5 21.0002 7 18.5113 7 9.80016C7 7.81987 7.7375 5.9207 9.05025 4.52044C10.363 3.12016 12.1435 2.3335 14 2.3335C14.3935 2.3335 14.7836 2.36885 15.1667 2.4379"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.166 9.3335C24.0991 9.3335 25.666 7.76649 25.666 5.8335C25.666 3.9005 24.0991 2.3335 22.166 2.3335C20.233 2.3335 18.666 3.9005 18.666 5.8335C18.666 7.76649 20.233 9.3335 22.166 9.3335Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0191 24.5C15.814 24.8536 15.5196 25.1471 15.1653 25.3511C14.8111 25.5551 14.4096 25.6626 14.0008 25.6626C13.592 25.6626 13.1904 25.5551 12.8362 25.3511C12.482 25.1471 12.1875 24.8536 11.9824 24.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
