import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

// <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19.4996 16.0002L17.0244 12.604" stroke="#4BDDB4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M12 17.5V14" stroke="#4BDDB4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M4.5 15.9999L6.96895 12.6123" stroke="#4BDDB4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M3 8C6.6 16 17.4 16 21 8" stroke="#4BDDB4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>

export function EyeClosedIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.4996 16.0002L17.0244 12.604 M12 17.5V14 M4.5 15.9999L6.96895 12.6123 M3 8C6.6 16 17.4 16 21 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
