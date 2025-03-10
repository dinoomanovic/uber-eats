import * as React from "react"
import Svg, { Rect, Mask, G, Path } from "react-native-svg"

function UkFlagImage(props) {
  return (
    <Svg
      width={44}
      height={29}
      viewBox="0 0 44 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={44} height={29} rx={2} fill="#fff" />
      <Mask
        id="a"
        style={{
          maskType: "luminance"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={44}
        height={29}
      >
        <Rect width={44} height={29} rx={2} fill="#fff" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="#0A17A7" d="M0 0H44V29H0z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.487 19.333l-14.846 9.24 2.344 3.206 18.777-11.687v10.841h10.476v-10.84l18.777 11.686 2.343-3.206-14.845-9.24H44V9.667H33.513L48.359.427 46.014-2.78 27.238 8.908V-1.933H16.762v10.84L-2.015-2.778-4.36.427l14.846 9.24H0v9.666h10.487z"
          fill="#fff"
        />
        <Path
          d="M29.335 9.182L49.238-2.9M31.449 19.861L49.29 30.958M12.58 9.15L-6.03-2.423M14.599 19.727L-6.031 32.35"
          stroke="#DB1F35"
          strokeWidth={0.666667}
          strokeLinecap="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 17.4h18.857V29h6.286V17.4H44v-5.8H25.143V0h-6.286v11.6H0v5.8z"
          fill="#E6273E"
        />
      </G>
    </Svg>
  )
}

export default UkFlagImage
