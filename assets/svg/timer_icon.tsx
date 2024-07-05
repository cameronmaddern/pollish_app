import React from "react";
import Icon from "./icon";
import type { IconProps } from "./icon_generic";

export function TimerIcon({ color, size }: IconProps) {
  const pathString =
    "M13.9912 23.0322C18.9922 23.0322 23.0879 18.9365 23.0879 13.9355C23.0879 8.94336 19.001 4.84766 14 4.84766C13.4551 4.84766 13.1475 5.17285 13.1475 5.7002V8.93457C13.1475 9.38281 13.4639 9.73438 13.9121 9.73438C14.3604 9.73438 14.6768 9.38281 14.6768 8.93457V6.67578C18.3945 7.01855 21.2598 10.1299 21.2598 13.9355C21.2598 17.9609 18.0342 21.2129 13.9912 21.2129C9.95703 21.2129 6.71387 17.9609 6.72266 13.9355C6.73145 12.2041 7.33789 10.5957 8.35742 9.35645C8.69141 8.89941 8.74414 8.41602 8.36621 8.03809C7.98828 7.66016 7.38184 7.69531 6.98633 8.21387C5.69434 9.77832 4.90332 11.7734 4.90332 13.9355C4.90332 18.9365 8.99902 23.0322 13.9912 23.0322ZM15.4062 15.2891C16.127 14.5244 15.9775 13.4873 15.1162 12.8984L10.6514 9.83105C10.124 9.47949 9.61426 9.99805 9.96582 10.5254L13.0332 14.9814C13.6221 15.8516 14.6592 16.0098 15.4062 15.2891Z";
  return (
    <Icon path={pathString} width={size} heightScale={1} pathFill={color} />
  );
}
