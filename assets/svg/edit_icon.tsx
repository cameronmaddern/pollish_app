import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

export function EditIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <Path
        d="M8.37894 3.29683L9.24222 2.43351C9.69786 1.97789 10.4365 1.97789 10.8922 2.43351L11.7171 3.25847C12.1727 3.71407 12.1727 4.45277 11.7171 4.90838L10.8538 5.77171M8.37894 3.29683L2.76978 8.90596C2.57607 9.09968 2.4567 9.35536 2.4326 9.62824L2.29138 11.2269C2.25943 11.5885 2.56211 11.8912 2.92378 11.8593L4.52236 11.718C4.79525 11.6939 5.05094 11.5745 5.24465 11.3809L10.8538 5.77171M8.37894 3.29683L10.8538 5.77171"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
