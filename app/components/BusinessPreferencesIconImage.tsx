import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BusinessPreferencesIconImage = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 6V3V0H16H7H6H4V6H0V24H24V6H19ZM7 3V6H16V3H7Z"
      fill="black"
    />
  </Svg>
);
export default BusinessPreferencesIconImage;
