// AccountManagement.tsx
import React, {useState, useEffect, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
} from 'react-native';
import NavBar from "@/assets/components/NavBar";
import Footer from "@/assets/components/Footer";
import {useNavigation} from "@react-navigation/native";
import LoginView from "@/LoginView";
import {UserProfile} from "@/assets/types/models";

interface AccountManagementProps {
    // Add any props you need to pass
}

// Add this at the top of your existing file
const AccountManagerPage = () => {
    // Add this state at the top of your component
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Add this handler
    const handleLoginSuccess = (userProfile: UserProfile) => {
        setProfile(userProfile);
        setIsAuthenticated(true);
    };

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

    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [profile, setProfile] = useState<UserProfile>({
        email: '',
        username: '',
        playerId: '',
        dateJoined: '',
    });
    const [editableProfile, setEditableProfile] = useState<UserProfile>({
        email: '',
        username: '',
        playerId: '',
        dateJoined: '',
    });

    useEffect(() => {
        fetchUserProfile();
    }, []);

    const fetchUserProfile = async () => {
        try {
            setIsLoading(true);
            const mockData = {
                email: 'user@example.com',
                username: 'player123',
                firstName: 'John',
                lastName: 'Doe',
                playerId: 'PLY123456',
                dateJoined: '2024-01-01',
            };
            setProfile(mockData);
            setEditableProfile(mockData);
        } catch (error) {
            Alert.alert('Error', 'Failed to load profile information');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            setIsSaving(true);
            // Replace with your actual API call
            // await updateUserProfile(editableProfile);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setProfile(editableProfile);
            setIsEditing(false);
            Alert.alert('Success', 'Profile updated successfully');
        } catch (error) {
            Alert.alert('Error', 'Failed to update profile');
        } finally {
            setIsSaving(false);
        }
    };

    const handleChangePassword = () => {
        // Implement password change logic or navigation
        Alert.alert('Change Password', 'Navigate to password change screen');
    };


    // Modify your return statement to include authentication check
    if (!isAuthenticated) {
        return <LoginView onLoginSuccess={handleLoginSuccess} />;
    }

    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#d38030" />
            </View>
        );
    }

    // Rest of your existing component code...
    return (
        <ScrollView ref={scrollViewRef} style={styles.container}>
            <NavBar onContactPress={scrollToFooter} navigation={navigation} />
            <View style={styles.header}>
                <Text style={styles.title}>Account Management</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Profile Information</Text>
                
                <View style={styles.infoContainer}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={isEditing ? editableProfile.email : profile.email}
                            onChangeText={(text) => 
                                setEditableProfile(prev => ({ ...prev, email: text }))}
                            editable={isEditing}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={[styles.input, !isEditing && styles.inputDisabled]}
                            value={isEditing ? editableProfile.username : profile.username}
                            onChangeText={(text) => 
                                setEditableProfile(prev => ({ ...prev, username: text }))}
                            editable={isEditing}
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Player ID</Text>
                        <Text style={styles.staticText}>{profile.playerId}</Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Date Joined</Text>
                        <Text style={styles.staticText}>
                            {new Date(profile.dateJoined).toLocaleDateString()}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    {!isEditing ? (
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => setIsEditing(true)}
                        >
                            <Text style={styles.buttonText}>Edit Profile</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.editButtons}>
                            <TouchableOpacity 
                                style={[styles.button, styles.cancelButton]} 
                                onPress={() => {
                                    setIsEditing(false);
                                    setEditableProfile(profile);
                                }}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.button, styles.saveButton]} 
                                onPress={handleSave}
                                disabled={isSaving}
                            >
                                <Text style={styles.buttonText}>
                                    {isSaving ? 'Saving...' : 'Save Changes'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Security</Text>
                <TouchableOpacity 
                    style={[styles.button, styles.securityButton]} 
                    onPress={handleChangePassword}
                >
                    <Text style={styles.buttonText}>Change Password</Text>
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(50, 17, 0, 1)',
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#d38030',
    },
    title: {
        fontSize: 24,
        fontWeight: '400',
        color: '#EBF166',
        fontFamily: 'dauphin',
    },
    section: {
        padding: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#EBF166',
        marginBottom: 20,
        fontFamily: 'gillSans',
    },
    infoContainer: {
        backgroundColor: 'rgba(213, 206, 123, 0.15)',
        borderRadius: 8,
        padding: 20,
        borderWidth: 2,
        borderColor: '#d5ce7b',
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        color: '#d38030',
        marginBottom: 5,
        fontSize: 14,
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
    inputDisabled: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(211, 128, 48, 0.5)',
    },
    staticText: {
        color: '#fff',
        padding: 12,
        fontSize: 16,
        fontFamily: 'gillSans',
    },
    buttonContainer: {
        marginTop: 20,
    },
    editButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    button: {
        backgroundColor: '#d38030',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 5,
    },
    cancelButton: {
        backgroundColor: 'rgba(211, 128, 48, 0.5)',
        flex: 1,
    },
    saveButton: {
        flex: 1,
    },
    securityButton: {
        backgroundColor: '#8B0000',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'gillSans',
    },
});

export default AccountManagerPage;