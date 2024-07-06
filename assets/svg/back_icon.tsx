import React from "react";
import { ColorValue } from "react-native";
import Svg, { Path } from "react-native-svg";

interface BackIconProps {
  color: ColorValue;
  size: number;
}

export function BackIcon({ color, size }: BackIconProps) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Path
        d="M5.67676 13.6455C5.67676 13.9092 5.79102 14.1729 5.99316 14.3662L11.7939 20.1582C12.0049 20.3604 12.2334 20.457 12.4883 20.457C13.042 20.457 13.4463 20.0615 13.4463 19.5254C13.4463 19.2441 13.3408 19.0068 13.1562 18.8311L11.1787 16.8271L8.62988 14.498L10.6777 14.6211H21.3301C21.9102 14.6211 22.3145 14.2168 22.3145 13.6455C22.3145 13.0654 21.9102 12.6611 21.3301 12.6611H10.6777L8.63867 12.7842L11.1787 10.4551L13.1562 8.45117C13.3408 8.27539 13.4463 8.03809 13.4463 7.75684C13.4463 7.2207 13.042 6.8252 12.4883 6.8252C12.2334 6.8252 11.9961 6.92188 11.7676 7.1416L5.99316 12.916C5.79102 13.1094 5.67676 13.373 5.67676 13.6455Z"
        fill={color}
      />
    </Svg>
  );
}
