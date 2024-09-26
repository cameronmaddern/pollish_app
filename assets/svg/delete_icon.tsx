import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

interface DeleteIconProps {
  color: ColorValue;
  size: number;
}

export function DeleteIcon({ color, size }: DeleteIconProps) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 24 24`} fill="none">
      <Path
        d="M6.75781 17.2426L12.0004 12M12.0004 12L17.243 6.75732M12.0004 12L6.75781 6.75732M12.0004 12L17.243 17.2426"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
