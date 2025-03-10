import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import ToggleVisibilityImage from '../components/ToggleVisibilityImage';
import LeftArrowImage from '../components/LeftArrowImage';
import RightArrowImage from '../components/RightArrowImage';

export default function PasswordInputScreen() {
    const router = useRouter();

    let [fontsLoaded] = useFonts({
        'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
        'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
        'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
        'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
    });

    const [password, setPassword] = useState('');
    const [isNextEnabled, setIsNextEnabled] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleInputChange = (text) => {
        setPassword(text);
    };

    const handleBackButtonPress = () => {
        router.push('/onboarding/PhoneInputScreen');
    };

    const handleNextButtonPress = () => {
        if (isNextEnabled) {
            router.push('/onboarding/PhoneVerificationScreen');
        }
    };

    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    useEffect(() => {
        setIsNextEnabled(password.length > 0);
    }, [password]);

    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                        <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={'padding'}
                  >
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Welcome back, John</Text>
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Please enter your password"
                            placeholderTextColor="#A4A4A4"
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={handleInputChange}
                            value={password}
                        />
                        <TouchableOpacity onPress={handleTogglePasswordVisibility}>
                            <ToggleVisibilityImage width={23} height={22} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Link href="/onboarding/PhoneVerificationScreen" style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>I've forgotten my password</Text>
            </Link>
            <Link href="/onboarding/PhoneVerificationScreen" style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>I cant sign in</Text>
            </Link>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackButtonPress}>
                    <LeftArrowImage width={25} height={25} style={styles.buttonLeftArrow} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.nextButton, { backgroundColor: '#EEEEEE' }]}
                    onPress={handleNextButtonPress}
                >
                    <View style={styles.nextButtonContent}>
                        <Text style={[styles.nextButtonText, { color: isNextEnabled ? '#000000' : '#7F7F7F' }]}>Next</Text>
                        <RightArrowImage style={styles.buttonRightArrow} width={21} height={18} fill={isNextEnabled ? '#000000' : '#7F7F7F'} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    container: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    title: {
        marginHorizontal: 15,
        marginTop: 62,
        lineHeight: 28,
        fontSize: 20,
        fontWeight: 500,
        fontFamily: 'UberMoveTextMedium',
        textAlign: 'left',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%'
    },
    passwordInputContainer: {
        height: 50,
        marginTop: 19,
        flexDirection: 'row',
        alignItems: 'center',
        paddingEnd: 19,
        borderColor: '#E6E6E6',
        backgroundColor: '#F5F5F5',
        width: 'auto',
        marginRight: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    forgotPasswordButton: {
        marginTop: 20,
        height: 40,
        marginStart: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 30,
        alignSelf: 'flex-start',
    },
    input: {
        fontSize: 16,
        lineHeight: 24,
        marginStart: 12,
        color: '#A4A4A4',
        fontFamily: 'UberMoveTextRegular', 
        fontWeight: '400',
    },
    backButtonContainer: {
        width: 54,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 27,
        alignSelf: 'flex-start',
        marginLeft: 16,
    },
    bottomButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        marginBottom: 35,
    },
    buttonLeftArrow: {
        alignContent: 'center',
        tintColor: '#EEEEEE'
    },
    buttonRightArrow: {
        alignContent: 'center',
        tintColor: '#EEEEEE'
    },
    nextButton: {
        height: 54,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 30,
        marginRight: 16,
    },
    nextButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
    },
    nextButtonText: {
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 24,
        letterSpacing: 0,
        color: '#7F7F7F',
        fontFamily: 'UberMoveTextBold',
        fontWeight: 700,
        marginRight: 14,
    },
    forgotPasswordText: {
        textAlign: 'left',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
        color: '#000000',
        fontFamily: 'UberMoveTextMedium',
        fontWeight: 500,
    },
});