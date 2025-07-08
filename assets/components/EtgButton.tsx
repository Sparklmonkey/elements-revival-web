import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

type ButtonProps = {
    text: string;
};

const EtgButton = (props: ButtonProps) => {
    return (
        <View style={styles.gamebarButton}>
            <ImageBackground source={require('../images/button.png')} resizeMode='contain' style={styles.gamebarButtonImage}>
                <Text style={styles.gamebarButtonText}>{props.text}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    gamebarButton: {
        alignItems: 'flex-end',
        alignSelf:'center',
        justifyContent: 'flex-end',
        height: 32,
        width: 180,
    },
    gamebarButtonImage: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    gamebarButtonText: {
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#EBF166',
        fontFamily: 'gillSans'
    }
})
export default EtgButton;