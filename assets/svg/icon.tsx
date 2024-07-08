import React from "react";
import {
  type ColorValue,
  type GestureResponderEvent,
  Pressable,
} from "react-native";
import { Path, Svg } from "react-native-svg";

interface IconProps {
  path: string;
  width: number;
  heightScale?: number;
  pathFill?: ColorValue;
  pathStroke?: ColorValue;
  svgFill?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function Icon({
  path,
  width,
  heightScale = 1,
  pathFill,
  pathStroke,
  svgFill = "none",
  onPress,
}: IconProps) {
  return onPress ? (
    <Pressable onPress={onPress}>
      <Svg
        width={width}
        height={width * heightScale}
        viewBox={`0 0 ${width} ${width * heightScale}`}
        fill={svgFill}
      >
        <Path d={path} fill={pathFill} stroke={pathStroke} />
      </Svg>
    </Pressable>
  ) : (
    <Svg
      width={width}
      height={width * heightScale}
      viewBox={`0 0 ${width} ${width * heightScale}`}
      fill={svgFill}
    >
      <Path d={path} fill={pathFill} stroke={pathStroke} />
    </Svg>
  );
}
