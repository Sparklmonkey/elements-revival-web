import Svg, {
    LinearGradient,
    Text,
    Defs,
    Stop,
    TSpan
} from 'react-native-svg';

const GradientText = (props) => (
<Svg viewBox="0 0 300 300" height="300"
     width="300">
    <Defs>
        <LinearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
            <Stop stopColor="#EBF166" offset="0%" />
            <Stop stopColor="#D5CE7B" offset="20%" />
        </LinearGradient>
    </Defs>
    <Text fill="url(#rainbow)">
        <TSpan fonSize="72" x="0" dy="72">text</TSpan>
    </Text>
</Svg>
)
export default GradientText