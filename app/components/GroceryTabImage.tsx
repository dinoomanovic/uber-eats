import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface SVGComponentProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const GroceryTabImage: React.FC<SVGComponentProps> = ({ focused, color, size, ...props }) => {
  const iconColor = focused && color ? color : "#B5B5B5"; // Determine icon color

  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6744 8.06665L18.071 22H4.23565L0.763825 8.1812L0.356567 8.2469V8.06665H21.6744Z"
        fill={iconColor}
      />
      <Path
        d="M15.9027 7.7C15.9027 11.113 13.5428 13.4 11.1846 13.4C8.82632 13.4 6.46643 11.113 6.46643 7.7C6.46643 4.28704 8.82632 2 11.1846 2C13.5428 2 15.9027 4.28704 15.9027 7.7Z"
        stroke={iconColor}
        strokeWidth={4}
      />
    </Svg>
  );
};

export default GroceryTabImage;