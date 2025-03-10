import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChevronDownImage = (props) => (
  <Svg
    width={12}
    height={7}
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.46934 0H11.0794C11.7443 0 12.0767 0.794219 11.6061 1.25967L6.80289 6.0139C6.51156 6.30203 6.03722 6.30203 5.74589 6.0139L0.942711 1.25967C0.472104 0.794219 0.804517 0 1.46934 0Z"
      fill="black"
    />
  </Svg>
);
export default ChevronDownImage;
