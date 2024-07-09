import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

export function HomeIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M19.8333 24.4999H8.16667C5.58934 24.4999 3.5 22.4105 3.5 19.8332V12.4921C3.5 10.8602 4.35238 9.34692 5.74792 8.50113L11.5813 4.96578C13.0679 4.06479 14.932 4.06479 16.4187 4.96578L22.2521 8.50113C23.6476 9.34692 24.5 10.8602 24.5 12.4921V19.8332C24.5 22.4105 22.4106 24.4999 19.8333 24.4999Z M10.5 19.8335H17.5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
