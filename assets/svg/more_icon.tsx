import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

interface MoreIconProps {
  color: ColorValue;
  size: number;
}

export function MoreIcon({ color, size }: MoreIconProps) {
  return (
    <Svg
      width={size}
      height={size / 4}
      viewBox={`0 0 ${size} ${size / 4}`}
      fill="none"
    >
      <Path
        d="M2.5 0C1.125 0 0 1.125 0 2.5C0 3.875 1.125 5 2.5 5C3.875 5 5 3.875 5 2.5C5 1.125 3.875 0 2.5 0ZM17.5 0C16.125 0 15 1.125 15 2.5C15 3.875 16.125 5 17.5 5C18.875 5 20 3.875 20 2.5C20 1.125 18.875 0 17.5 0ZM10 0C8.625 0 7.5 1.125 7.5 2.5C7.5 3.875 8.625 5 10 5C11.375 5 12.5 3.875 12.5 2.5C12.5 1.125 11.375 0 10 0Z"
        fill={color}
      />
    </Svg>
  );
}
