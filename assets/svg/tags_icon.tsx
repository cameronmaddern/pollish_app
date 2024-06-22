import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

interface TagsIconProps {
  color: ColorValue;
  size: number;
}

export function TagsIcon({ color, size }: TagsIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M10.5007 25.6668C15.011 25.6668 18.6673 22.0105 18.6673 17.5002C18.6673 12.9898 15.011 9.3335 10.5007 9.3335C5.99033 9.3335 2.33398 12.9898 2.33398 17.5002C2.33398 22.0105 5.99033 25.6668 10.5007 25.6668Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5007 18.6668C22.011 18.6668 25.6673 15.0105 25.6673 10.5002C25.6673 5.98984 22.011 2.3335 17.5007 2.3335C12.9903 2.3335 9.33398 5.98984 9.33398 10.5002C9.33398 15.0105 12.9903 18.6668 17.5007 18.6668Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
