import * as React from "react"
import Svg, {Path} from "react-native-svg"

const Caretdown = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            stroke="#D5CE7C"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="m13 6-5 5-5-5"
        />
    </Svg>
)
export default Caretdown
