import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const LeftArrow = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={48}
        height={48}
        fill="none"
        {...props}
    >
        <Rect width={48} height={48} fill="#fff" fillOpacity={0.25} rx={24} />
        <Path
            stroke="#EBF166"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M28 34 18 24l10-10"
        />
    </Svg>
)
export default LeftArrow
