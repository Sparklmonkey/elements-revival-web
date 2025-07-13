import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const RightArrow = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        {...props}
    >
        <Rect
            width={48}
            height={48}
            fill="#fff"
            fillOpacity={0.25}
            rx={24}
            transform="matrix(-1 0 0 1 48 0)"
        />
        <Path
            stroke="#EBF166"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="m20 34 10-10-10-10"
        />
    </Svg>
)
export default RightArrow
