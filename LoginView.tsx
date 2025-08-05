// LoginView.tsx
import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator, ScrollView,
} from 'react-native';
import NavBar from "@/assets/components/NavBar";
import {useNavigation} from "@react-navigation/native";
import Footer from "@/assets/components/Footer";
import InputWithTitle from "@/assets/components/InputWithTitle";
import {storage} from "@/assets/localStorage/localStorage";
import {loginUnityUser} from "@/assets/api/accountManagementServices";
import {UnityLoginResponse, UserProfile} from './assets/types/models';

interface LoginViewProps {
    onLoginSuccess: (user: UserProfile) => void;
}

const LoginView = ({ onLoginSuccess }: LoginViewProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();
    const scrollViewRef = useRef<ScrollView>(null);
    const footerRef = useRef<View>(null);
    const [isFooterHighlighted, setIsFooterHighlighted] = useState(false);

    const scrollToFooter = () => {
        // Measure the footer position
        footerRef.current?.measureLayout(
            // @ts-ignore - Known issue with React Native types
            scrollViewRef.current?.getInnerViewNode(),
            (x: number, y: number) => {
                // Scroll to the footer position
                scrollViewRef.current?.scrollTo({ y, animated: true });
                // Highlight the footer
                setIsFooterHighlighted(true);
                // Remove highlight after 2 seconds
                setTimeout(() => setIsFooterHighlighted(false), 2000);
            },
            () => console.log("Failed to measure")
        );
    };

    const handleLogin = async () => {

        if (!username || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            setIsLoading(true);
            const loginResponse = await loginUnityUser(username, password);
            if (loginResponse.username === "") {
                Alert.alert('Error', 'Please fill in all fields');
                return;
            }
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            const userProfile: UserProfile =
            {
                email: "",
                username: loginResponse.username,
                playerId: loginResponse.playerId,
                dateJoined: ""
            };

            onLoginSuccess(userProfile);
        } catch (error) {
            Alert.alert('Error', 'Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView ref={scrollViewRef} style={styles.container}>
            <NavBar onContactPress={scrollToFooter} navigation={navigation} />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Login to manage your Elements Account.</Text>
            <View style={styles.formContainer}>
                <InputWithTitle title={"Username"}
                                keyboardType={"default"}
                                updateTextMethod={setUsername}
                                textValue={username}
                                placeHolder={"Enter your username"}
                                isSecureText={false} />
                <InputWithTitle title={"Password"}
                                keyboardType={"default"}
                                updateTextMethod={setPassword}
                                textValue={password}
                                placeHolder={"Enter your password"}
                                isSecureText={true} />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Login</Text>
                    )}
                </TouchableOpacity>
            </View>
            <View style={{width: '100%'}}
                  ref={footerRef}
            >
                <Footer highlightContact={isFooterHighlighted} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(50, 17, 0, 1)',
    },
    title: {
        fontSize: 32,
        fontWeight: '400',
        color: '#EBF166',
        textAlign: 'center',
        marginBottom: 12,
        fontFamily: 'dauphin',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '400',
        color: '#EBF166',
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: 'gillSans',
    },
    formContainer: {
        backgroundColor: 'rgba(213, 206, 123, 0.15)',
        borderRadius: 8,
        padding: 20,
        borderWidth: 2,
        width: '33%',
        alignSelf: 'center',
        marginBottom: 50,
        borderColor: '#d5ce7b',
    },
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
    button: {
        backgroundColor: '#d38030',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'gillSans',
    },
});

export default LoginView;
