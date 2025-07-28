import {KeyboardTypeOptions, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";


type InputWithTitleProps = {
    title: string,
    keyboardType: KeyboardTypeOptions,
    updateTextMethod: (text: string) => void,
    textValue: string,
    placeHolder: string,
    isSecureText: boolean,
}
const InputWithTitle = (props: InputWithTitleProps) => {

    return (
        <View style={styles.inputGroup}>
            <Text style={styles.label}>{props.title}</Text>
            <TextInput
                style={styles.input}
                value={props.textValue}
                onChangeText={props.updateTextMethod}
                keyboardType={props.keyboardType}
                autoCapitalize="none"
                placeholder={props.placeHolder}
                secureTextEntry={props.isSecureText}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
        </View>
    );
};

export default InputWithTitle


const styles = StyleSheet.create({
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        color: '#d38030',
        marginBottom: 5,
        fontSize: 16,
        fontFamily: 'gillSans',
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8,
        padding: 12,
        color: '#fff',
        borderWidth: 1,
        borderColor: '#d38030',
        fontFamily: 'gillSans',
    },
})
