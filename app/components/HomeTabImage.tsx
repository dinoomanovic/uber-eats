import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface HomeTabImageProps {
  focused?: boolean;
  color?: string;
  size?: number;
}

const HomeTabImage: React.FC<HomeTabImageProps> = ({ focused, color, size, ...props }) => {
  const fillColor = focused && color ? color : "#B5B5B5"; // Determine fill color

  return (
    <Svg
      width={19}
      height={23}
      viewBox="0 0 19 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0.29778 5.74681L0.420728 22.1463L7.22454 22.092L7.16456 14.0922L12.3675 14.0507L12.4274 22.0504L18.831 21.9993L18.7081 5.59981L9.46095 0.0734739L0.29778 5.74681Z"
        fill={fillColor} // Use the determined fill color
      />
    </Svg>
  );
};

export default HomeTabImage;