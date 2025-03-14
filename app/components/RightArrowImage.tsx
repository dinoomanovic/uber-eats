import * as React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrowImage = (props) => {
  const { fill = "white", ...fillProps } = props; 

  return (
    <Svg
      width={23}
      height={18}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...fillProps}
    >
      <Path d="M22.1012 9L15.2 18H11.4839L17.3234 10.5H0.654297V7.5H17.3234L11.4839 0H15.2L22.1012 9Z" fill={fill} />
    </Svg>
  );
};

export default RightArrowImage;