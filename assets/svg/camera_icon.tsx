import React from "react";
import Svg, { Path } from "react-native-svg";

interface CameraIconProps {
  size: number;
}

export function CameraIcon({ size }: CameraIconProps) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 36 36`} fill="none">
      <Path
        d="M3 29.2222V15.3333C3 13.7992 4.34314 12.5556 6 12.5556H6.75C7.69426 12.5556 8.58343 12.1439 9.15 11.4444L12.48 7.33333C12.65 7.1235 12.9167 7 13.2 7H22.8C23.0833 7 23.3501 7.1235 23.52 7.33333L26.85 11.4444C27.4165 12.1439 28.3058 12.5556 29.25 12.5556H30C31.6569 12.5556 33 13.7992 33 15.3333V29.2222C33 30.7564 31.6569 32 30 32H6C4.34314 32 3 30.7564 3 29.2222Z"
        stroke="#818181"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18 26C21.3137 26 24 23.3137 24 20C24 16.6863 21.3137 14 18 14C14.6863 14 12 16.6863 12 20C12 23.3137 14.6863 26 18 26Z"
        stroke="#818181"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
