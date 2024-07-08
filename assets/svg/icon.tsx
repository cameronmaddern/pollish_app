import React from "react";
import {
  type ColorValue,
  type GestureResponderEvent,
  TouchableOpacity,
  View,
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
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: width,
        justifyContent: "center",
      }}
    >
      <Svg
        width={width}
        height={width * heightScale}
        viewBox={`0 0 ${width} ${width * heightScale}`}
        fill={svgFill}
      >
        <Path d={path} fill={pathFill} stroke={pathStroke} />
      </Svg>
    </TouchableOpacity>
  ) : (
    <View style={{ height: width, justifyContent: "center" }}>
      <Svg
        width={width}
        height={width * heightScale}
        viewBox={`0 0 ${width} ${width * heightScale}`}
        fill={svgFill}
      >
        <Path d={path} fill={pathFill} stroke={pathStroke} />
      </Svg>
    </View>
  );
}
