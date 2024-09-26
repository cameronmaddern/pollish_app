import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

export function ActivityIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M3.5 14H7L10.5 3.5L17.5 24.5L21 14H24.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
