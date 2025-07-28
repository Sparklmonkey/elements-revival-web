import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { useState } from "react";
import { EmailProps, sendEmail } from "@/assets/functions/sendEmail";

interface FormErrors {
    email: string;
    firstName: string;
    username: string;
    message: string;
}

const ContactForm = () => {
    const [emailInputText, setEmailInputText] = useState<string>('');
    const [firstNameInputText, setFirstNameInputText] = useState<string>('');
    const [usernameInputText, setUsernameInputText] = useState<string>('');
    const [playerIdInputText, setPlayerIdInputText] = useState<string>('');
    const [messageInputText, setMessageInputText] = useState<string>('');
    const [errors, setErrors] = useState<FormErrors>({
        email: '',
        firstName: '',
        username: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {
            email: '',
            firstName: '',
            username: '',
            message: ''
        };
        let isValid = true;

        // Email validation
        if (!emailInputText.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(emailInputText)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        // First name validation
        if (!firstNameInputText.trim()) {
            newErrors.firstName = 'First name is required';
            isValid = false;
        } else if (firstNameInputText.length < 2) {
            newErrors.firstName = 'First name must be at least 2 characters';
            isValid = false;
        }

        // Username validation
        if (!usernameInputText.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        } else if (usernameInputText.length < 3) {
            newErrors.username = 'Username must be at least 3 characters';
            isValid = false;
        }

        // Message validation
        if (!messageInputText.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (messageInputText.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const createAndSendEmail = async () => {
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const emailProps: EmailProps = {
                senderEmail: emailInputText,
                username: usernameInputText,
                firstName: firstNameInputText,
                playerId: playerIdInputText,
                message: messageInputText,
            };
            
            const result = await sendEmail(emailProps);
            alert('Feedback has been sent successfully. Thank you for your feedback.');
            
            // Clear form after successful submission
            setEmailInputText('');
            setFirstNameInputText('');
            setUsernameInputText('');
            setPlayerIdInputText('');
            setMessageInputText('');
            setErrors({
                email: '',
                firstName: '',
                username: '',
                message: ''
            });
        } catch (error) {
            alert('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Contact Us</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.formColumn}>
                    <View>
                        <View style={[styles.searchBar, errors.email && styles.errorInput]}>
                            <TextInput
                                style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                                onChangeText={setEmailInputText}
                                value={emailInputText}
                                placeholder="Enter e-mail here"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                    </View>

                    <View>
                        <View style={[styles.searchBar, errors.firstName && styles.errorInput]}>
                            <TextInput
                                style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                                onChangeText={setFirstNameInputText}
                                value={firstNameInputText}
                                placeholder="First name"
                            />
                        </View>
                        {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
                    </View>

                    <View>
                        <View style={[styles.searchBar, errors.username && styles.errorInput]}>
                            <TextInput
                                style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                                onChangeText={setUsernameInputText}
                                value={usernameInputText}
                                placeholder="Account Username"
                                autoCapitalize="none"
                            />
                        </View>
                        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
                    </View>

                    <View style={styles.searchBar}>
                        <TextInput
                            style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                            onChangeText={setPlayerIdInputText}
                            value={playerIdInputText}
                            placeholder="Player Id (Optional)"
                        />
                    </View>
                </View>

                <View style={styles.formColumn}>
                    <View>
                        <View style={[styles.searchBar, errors.message && styles.errorInput]}>
                            <TextInput
                                multiline={true}
                                numberOfLines={7}
                                style={[styles.searchByUsername, ({outlineStyle: 'none'} as any)]}
                                onChangeText={setMessageInputText}
                                value={messageInputText}
                                placeholder="Write your message here"
                            />
                        </View>
                        {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
                    </View>

                    <TouchableOpacity 
                        onPress={createAndSendEmail}
                        disabled={isSubmitting}
                        style={isSubmitting ? styles.buttonDisabled : null}
                    >
                        <View style={styles.button}>
                            <Text style={styles.send}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // ... existing styles remain the same ...
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
    errorInput: {
        borderColor: '#ff4444',
    },
    errorText: {
        color: '#ff4444',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
        fontFamily: "gillSans"
    },
    buttonDisabled: {
        opacity: 0.7,
    },
});

export default ContactForm;