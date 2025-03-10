import * as React from "react";
import Svg, { Path, Line } from "react-native-svg";

interface BrowseTabImageProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const BrowseTabImage: React.FC<BrowseTabImageProps> = ({ focused, color, size, ...props }) => {
  const iconColor = focused && color ? color : "#B5B5B5"; // Determine icon color

  return (
    <Svg
      width={30}
      height={20}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M24.7293 13.7042L24.5058 14.0398L24.7864 14.3294L28.3969 18.0556L27.209 19.2815L23.6204 15.578L23.3218 15.2699L22.972 15.5181C21.6074 16.4862 20.0019 17.0927 18.2368 17.0927C13.8622 17.0927 10.2133 13.3499 10.2133 8.79633C10.2133 4.24269 13.8622 0.5 18.2368 0.5C22.6115 0.5 26.2603 4.24269 26.2603 8.79633C26.2603 10.6296 25.669 12.2938 24.7293 13.7042ZM18.2368 2.37038C14.7159 2.37038 11.9049 5.29439 11.9049 8.88889C11.9049 12.4834 14.7159 15.4074 18.2368 15.4074C21.7576 15.4074 24.5687 12.4834 24.5687 8.88889C24.5687 5.29438 21.7576 2.37038 18.2368 2.37038Z"
        fill={iconColor}
        stroke={iconColor}
      />
      <Line
        x1={0.0233154}
        y1={2.54541}
        x2={8.83233}
        y2={2.54541}
        stroke={iconColor}
        strokeWidth={4}
      />
      <Line
        x1={0.0233154}
        y1={8.90906}
        x2={6.18963}
        y2={8.90906}
        stroke={iconColor}
        strokeWidth={4}
      />
      <Line
        x1={0.0233154}
        y1={15.2727}
        x2={8.83233}
        y2={15.2727}
        stroke={iconColor}
        strokeWidth={4}
      />
    </Svg>
  );
};

export default BrowseTabImage;