import React from "react";
import Svg, { Path } from "react-native-svg";

interface ImageLibraryIconProps {
  size: number;
}

export function ImageLibraryIcon({ size }: ImageLibraryIconProps) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 36 36`} fill="none">
      <Path
        d="M31.5 11.4V30.6C31.5 31.0971 31.0971 31.5 30.6 31.5H11.4C10.9029 31.5 10.5 31.0971 10.5 30.6V11.4C10.5 10.9029 10.9029 10.5 11.4 10.5H30.6C31.0971 10.5 31.5 10.9029 31.5 11.4Z"
        stroke="#818181"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27 6H6.9C6.40294 6 6 6.40294 6 6.9V27"
        stroke="#818181"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 25.2L18.6666 22.5L31.5 27"
        stroke="#818181"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.75 19.5C23.5074 19.5 22.5 18.4926 22.5 17.25C22.5 16.0074 23.5074 15 24.75 15C25.9926 15 27 16.0074 27 17.25C27 18.4926 25.9926 19.5 24.75 19.5Z"
        stroke="#818181"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
