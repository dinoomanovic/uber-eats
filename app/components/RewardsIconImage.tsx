import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const RewardsIconImage = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={12} cy={12} r={12} fill="black" />
    <Path
      d="M12 4L13.7961 9.52786H19.6085L14.9062 12.9443L16.7023 18.4721L12 15.0557L7.29772 18.4721L9.09383 12.9443L4.39155 9.52786H10.2039L12 4Z"
      fill="white"
    />
  </Svg>
);
export default RewardsIconImage;
