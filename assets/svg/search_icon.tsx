import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SearchIconProps {
  color: ColorValue;
  size: number;
}

export function SearchIcon({ color, size }: SearchIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M19.834 19.8335L24.5007 24.5002"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.5 12.8333C3.5 17.988 7.67867 22.1667 12.8333 22.1667C15.4152 22.1667 17.7521 21.1184 19.4418 19.4242C21.1256 17.7359 22.1667 15.4062 22.1667 12.8333C22.1667 7.67867 17.988 3.5 12.8333 3.5C7.67867 3.5 3.5 7.67867 3.5 12.8333Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
