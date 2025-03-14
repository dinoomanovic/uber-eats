import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FavouritesIconImage = (props) => (
  <Svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16 0C13.8 0 12.2 1.2 11 2.5C9.8 1.3 8.2 0 6 0C2.5 0 0 2.9 0 6.5C0 8.3 0.7 9.9 2 11L11 19.5L20 11C21.2 9.8 22 8.3 22 6.5C22 2.9 19.5 0 16 0Z"
      fill="black"
    />
  </Svg>
);
export default FavouritesIconImage;
