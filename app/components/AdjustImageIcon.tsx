import * as React from "react";
import Svg, { Path } from "react-native-svg";
const AdjustImageIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
      stroke="black"
      strokeWidth={2}
    />
    <Path d="M11 8H20" stroke="black" strokeWidth={2} />
    <Path
      d="M16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13Z"
      stroke="black"
      strokeWidth={2}
    />
    <Path d="M13 16H4" stroke="black" strokeWidth={2} />
  </Svg>
);
export default AdjustImageIcon;
