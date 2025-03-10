import * as React from "react";
import Svg, { Circle, Line } from "react-native-svg";
const SettingsIconImage = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} fill="black" />
    <Line x1={12} x2={12} y2={24} stroke="black" strokeWidth={3} />
    <Line
      y1={-1.5}
      x2={24}
      y2={-1.5}
      transform="matrix(1 0 0 -1 0 11.5)"
      stroke="black"
      strokeWidth={3}
    />
    <Line
      y1={-1.5}
      x2={24}
      y2={-1.5}
      transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3.5 19.9706)"
      stroke="black"
      strokeWidth={3}
    />
    <Line
      x1={19.9093}
      y1={21.0312}
      x2={2.93875}
      y2={4.06068}
      stroke="black"
      strokeWidth={3}
    />
    <Circle cx={12} cy={12} r={8} fill="white" />
  </Svg>
);
export default SettingsIconImage;
