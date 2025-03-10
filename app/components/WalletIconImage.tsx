import * as React from "react";
import Svg, { Path } from "react-native-svg";
const WalletIconImage = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M14.12 14H9.88L6.88 11H1V20H23V11H17.12L14.12 14Z" fill="black" />
    <Path d="M1 4V8H8.12L11.12 11H12.88L15.88 8H23V4H1Z" fill="black" />
  </Svg>
);
export default WalletIconImage;
