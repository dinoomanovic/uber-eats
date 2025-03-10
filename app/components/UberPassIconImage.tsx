import * as React from "react";
import Svg, { Path } from "react-native-svg";
const UberPassIconImage = (props) => (
  <Svg
    width={24}
    height={16}
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H24V4.36328H22.1989C20.1906 4.36328 18.5625 5.99134 18.5625 7.99964C18.5625 10.008 20.1906 11.636 22.1989 11.636H24V16H0V11.636H1.80114C3.80945 11.636 5.4375 10.008 5.4375 7.99964C5.4375 5.99134 3.80945 4.36328 1.80114 4.36328H0V0Z"
      fill="black"
    />
  </Svg>
);
export default UberPassIconImage;
