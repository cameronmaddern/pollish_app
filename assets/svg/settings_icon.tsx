import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

export function SettingsIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.0669 15.933 10.5 14 10.5C12.0669 10.5 10.5 12.0669 10.5 14C10.5 15.933 12.0669 17.5 14 17.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.8935 12.1281L21.6128 9.03576L23.334 7.00016L21.0007 4.66683L18.9761 6.39694L15.8181 5.09819L15.0918 2.3335H12.8118L12.0746 5.13481L8.98913 6.43545L7.00065 4.66683L4.66732 7.00016L6.36292 9.08715L5.1019 12.1875L2.33398 12.8335V15.1668L5.13528 15.9316L6.43569 19.0165L4.66732 21.0002L7.00065 23.3335L9.09034 21.6305L12.1305 22.8812L12.834 25.6668H15.1673L15.8726 22.8822L18.9649 21.6016C19.4804 21.97 21.0007 23.3335 21.0007 23.3335L23.334 21.0002L21.6025 18.9578L22.8835 15.8645L25.6672 15.1402L25.6673 12.8335L22.8935 12.1281Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
