import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownArrowImage(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.292 12.25V9.085l5.208 3.833 5.208-3.833v3.167L12.5 16.084l-5.208-3.833z"
        fill="#000"
      />
    </Svg>
  )
}

export default DownArrowImage
