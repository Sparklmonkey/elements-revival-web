import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import * as React from "react";
import {useState} from "react";
import {sendEmail} from "@/assets/functions/sendEmail";

const ContactForm = () => {

    const TOKEN = "bf29554249e07a1bc6e20a6c878d2477";

    const [emailInputText, setEmailInputText] = useState<string>("");
    const [firstNameInputText, setFirstNameInputText] = useState<string>("");
    const [usernameInputText, setUsernameInputText] = useState<string>("");
    const [playerIdInputText, setPlayerIdInputText] = useState<string>("");
    const [messageInputText, setMessageInputText] = useState<string>("");

    function createAndSendEmail() {
        sendEmail(emailInputText, "User Feedback", messageInputText)
            .then((result) => {console.log(result)})
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Contact Us</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formColumn}>
                    <View style={styles.searchBar}>
                        <TextInput
                            onSubmitEditing={() => {
                            }}
                            style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                            onChangeText={setEmailInputText}
                            value={emailInputText}
                            placeholder="Enter e-mail here"
                            keyboardType="default"
                        />
                    </View>
                    <View style={styles.searchBar}>
                        <TextInput
                            onSubmitEditing={() => {
                            }}
                            style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                            onChangeText={setFirstNameInputText}
                            value={firstNameInputText}
                            placeholder="First name"
                            keyboardType="default"
                        />
                    </View>
                    <View style={styles.searchBar}>
                        <TextInput
                            onSubmitEditing={() => {
                            }}
                            style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                            onChangeText={setUsernameInputText}
                            value={usernameInputText}
                            placeholder="Account Username"
                            keyboardType="default"
                        />
                    </View>
                    <View style={styles.searchBar}>
                        <TextInput
                            onSubmitEditing={() => {
                            }}
                            style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                            onChangeText={setPlayerIdInputText}
                            value={playerIdInputText}
                            placeholder="Player Id (Optional)"
                            keyboardType="default"
                        />
                    </View>
                </View>
                <View style={styles.formColumn}>
                    <View style={styles.searchBar}>
                        <TextInput
                            onSubmitEditing={() => {
                            }}
                            multiline={true}
                            numberOfLines={7}
                            style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                            onChangeText={setMessageInputText}
                            value={messageInputText}
                            placeholder="Write your message here"
                            keyboardType="default"
                        />
                    </View>
                    <TouchableOpacity onPress={createAndSendEmail}>
                        <View style={styles.button}>
                            <Text style={styles.send}>Send Message</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "rgba(213, 206, 123, 0.15)",
        gap: 8,
        padding: 12,
        borderColor: "#d5ce7b",
        borderRadius: 8,
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "row",
        borderWidth: 2,
        borderStyle: "solid"
    },
    container: {
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#d38030",
        width: "100%",
        height: "100%",
        marginHorizontal: 50,
    },
    titleContainer: {
        marginTop: 0,
        alignItems: "flex-start",
        width: "100%",
        padding: 12,
    },
    title: {
        fontWeight: "600",
        color: "#fff",
        textAlign: "left",
        fontFamily: "gillSans",
        fontSize: 18,
    },
    formContainer: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 24,
        gap: 24,
        marginBottom: 24,
    },
    formColumn: {
        gap: 8,
        height: '100%',
        flex: 1,
        flexDirection: "column",
    },
    searchByUsername: {
        color: "#d38030",
        textAlign: "left",
        fontSize: 16,
        fontFamily: "gillSans",
        fontWeight: "600",
        flex: 1,
    },
    send: {
        color: "#fff",
        fontSize: 18,
        textAlign: "left",
        fontFamily: "gillSans"
    },
    button: {
        width: '100%',
        backgroundColor: "#d38030",
        paddingHorizontal: 8,
        paddingVertical: 10,
        justifyContent: "center",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
})

export default ContactForm;