import * as React from "react";
import Svg, { Path } from "react-native-svg";
const OrdersIconImage = (props) => (
  <Svg
    width={16}
    height={19}
    viewBox="0 0 16 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.5 0V18.333L5.083 15.833L8 18.333L10.917 15.833L15.5 18.333V0H0.5ZM12.167 6.667H3.833V4.167H12.167V6.667Z"
      fill="black"
    />
  </Svg>
);
export default OrdersIconImage;
