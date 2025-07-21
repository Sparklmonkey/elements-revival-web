import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withRepeat,
    Easing,
} from 'react-native-reanimated';

const DURATION = 6000;
const NUMBER_OF_ELEMENTS = 11;
const RADIUS = 200;

// Define your image names array
const elementNames = [
    'air',
    'earth',
    'fire',
    'water',
    'light',
    'darkness',
    'life',
    'gravity',
    'time',
    'entropy',
    'death',
];

// Create an image map object
const imageMap: { [key: string]: any } = {
    'air': require('../images/elements/air.png'),
    'earth': require('../images/elements/earth.png'),
    'fire': require('../images/elements/fire.png'),
    'water': require('../images/elements/water.png'),
    'light': require('../images/elements/light.png'),
    'darkness': require('../images/elements/darkness.png'),
    'life': require('../images/elements/life.png'),
    'gravity': require('../images/elements/gravity.png'),
    'time': require('../images/elements/time.png'),
    'entropy': require('../images/elements/entropy.png'),
    'death': require('../images/elements/death.png'),
};

export default function LoadingElements() {
    const rotation = useSharedValue(0);
    
    const elements = Array.from({length: NUMBER_OF_ELEMENTS}, (_, index) => {
        const angle = (index * 2 * Math.PI) / NUMBER_OF_ELEMENTS;
        return {
            angle,
            index,
            elementName: elementNames[index]
        };
    });

    React.useEffect(() => {
        rotation.value = withRepeat(
            withTiming(2 * Math.PI, {
                duration: DURATION,
                easing: Easing.linear,
            }),
            -1,
            false
        );
    }, []);

    return (
        <View style={styles.container}>
            {elements.map(({angle, index, elementName}) => {
                const animatedStyle = useAnimatedStyle(() => {
                    const currentAngle = angle + rotation.value;
                    return {
                        transform: [
                            {
                                translateX: RADIUS * Math.cos(currentAngle),
                            },
                            {
                                translateY: RADIUS * Math.sin(currentAngle),
                            },
                        ],
                    };
                });

                return (
                    <Animated.View
                        key={index}
                        style={[styles.box, animatedStyle]}
                    >
                        <Image 
                            source={imageMap[elementName]}
                            style={styles.image}
                        />
                    </Animated.View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
    },
    box: {
        height: 120,
        width: 120,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 120,
        width: 120,
        resizeMode: 'contain',
    },
});