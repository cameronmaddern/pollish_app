import React from "react";
import Svg, { Path } from "react-native-svg";
import type { IconProps } from "./icon_generic";

export function LicenseIcon({ color, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M23.3327 14.0002V6.70678C23.3327 6.52113 23.259 6.34308 23.1277 6.2118L19.4543 2.53853C19.3231 2.40724 19.145 2.3335 18.9594 2.3335H5.36602C4.97942 2.3335 4.66602 2.6469 4.66602 3.0335V24.9668C4.66602 25.3535 4.97942 25.6668 5.36602 25.6668H15.166"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.33398 11.6667H18.6673M9.33398 7H14.0007M9.33398 16.3333H12.834"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.666 2.3335V6.30016C18.666 6.68676 18.9794 7.00016 19.366 7.00016H23.3327"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.3238 17.646L26.3051 18.4031C26.6154 18.482 26.8343 18.764 26.8247 19.084C26.6244 25.802 22.7494 26.8335 22.7494 26.8335C22.7494 26.8335 18.8744 25.802 18.6741 19.084C18.6646 18.764 18.8834 18.482 19.1938 18.4031L22.1751 17.646C22.552 17.5503 22.9468 17.5503 23.3238 17.646Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
