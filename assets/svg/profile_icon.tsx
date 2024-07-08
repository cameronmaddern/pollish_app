import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

export function ProfileIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M5.83398 23.3333V22.1667C5.83398 17.6563 9.49033 14 14.0007 14C18.511 14 22.1673 17.6563 22.1673 22.1667V23.3333 M14.0007 13.9998C16.5779 13.9998 18.6673 11.9105 18.6673 9.33317C18.6673 6.75584 16.5779 4.6665 14.0007 4.6665C11.4233 4.6665 9.33398 6.75584 9.33398 9.33317C9.33398 11.9105 11.4233 13.9998 14.0007 13.9998Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
