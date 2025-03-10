import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import LeftArrowImage from '../components/LeftArrowImage';
import RightArrowImage from '../components/RightArrowImage';

export default function PhoneVerificationScreen() {
    const router = useRouter();

    const handleBackButtonPress = () => {
        router.push('/onboarding/PasswordInputScreen');
    };

    const handleNextButtonPress = () => {
        if (isNextEnabled) {
            router.push('/onboarding/EmailVerificationScreen');
        }
    };

    let [fontsLoaded] = useFonts({
        'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
        'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
        'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
        'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
    });

    const [code, setCode] = useState(['', '', '', '']);
    const [isNextEnabled, setIsNextEnabled] = useState(false);
    const [inputBorders, setInputBorders] = useState(['#E6E6E6', '#E6E6E6', '#E6E6E6', '#E6E6E6']);
    const [inputTexts, setInputTexts] = useState(['#A4A4A4', '#A4A4A4', '#A4A4A4', '#A4A4A4']);
    const [timer, setTimer] = useState(9);
    const [timerExpired, setTimerExpired] = useState(false);

    useEffect(() => {
        setIsNextEnabled(code.every(digit => digit !== ''));
    }, [code]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setTimerExpired(true);
        }
    }, [timer]);

    const handleCodeChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        if (text.length === 1 && index < 3) {
            inputs[index + 1].focus();
        }
        if (text.length === 0) {
            handleInputBlur(index);
        } else {
            handleInputFocus(index); // Add this line to re-trigger focus logic
        }
    };

    const handleInputFocus = (index) => {
        const newBorders = [...inputBorders];
        newBorders[index] = '#000000';
        setInputBorders(newBorders);

        const newTexts = [...inputTexts];
        newTexts[index] = '#000000';
        setInputTexts(newTexts);
    };

    const handleInputBlur = (index) => {
        const newBorders = [...inputBorders];
        newBorders[index] = '#E6E6E6';
        setInputBorders(newBorders);

        const newTexts = [...inputTexts];
        newTexts[index] = '#A4A4A4';
        setInputTexts(newTexts);
    };

    const inputs = [];

    if (!fontsLoaded) return null;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <KeyboardAvoidingView
                            style={{ flex: 1 }}
                            behavior={'padding'}
                          >
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Enter the 4-digit code sent to you at 05599224612</Text>
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    {code.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={input => inputs[index] = input}
                            style={[
                                styles.codeInput,
                                { borderColor: inputBorders[index], color: inputTexts[index], marginLeft: index === 0 ? 0 : 12.81 },
                            ]}
                            maxLength={1}
                            keyboardType="numeric"
                            value={digit}
                            onChangeText={(text) => handleCodeChange(text, index)}
                            onFocus={() => handleInputFocus(index)}
                            onBlur={() => handleInputBlur(index)}
                        />
                    ))}
                </View>
            </View>
            <Link href="/onboarding/EmailVerificationScreen" style={styles.hintButton}>
                <Text style={[styles.noCodeText, { color: timerExpired ? '#000000' : '#7F7F7F' }]}>
                    I haven’t received a code (0.0{timer})
                </Text>
            </Link>
            <Link href="/onboarding/EmailVerificationScreen" style={styles.hintButton}>
                <Text style={styles.loginWithPasswordText}>Log in with password</Text>
            </Link>
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.backButtonContainer} onPress={handleBackButtonPress}>
                    <LeftArrowImage width={25} height={25} style={styles.buttonLeftArrow} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.nextButton, { backgroundColor: '#EEEEEE' }]} onPress={handleNextButtonPress}>
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

  codeInput: {
    width: 53.39,
    height: 50,
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    fontWeight: 500,
    fontFamily: 'UberMoveTextMedium',
    marginHorizontal: 12.81,
},

rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 19,
},
nextButton: {
    height: 54,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 30,
    marginRight: 16,
},
nextButtonText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0,
    fontWeight: 700,
    marginRight: 14,
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

  hintButton: {
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

  flag: {
    marginStart: 13,
  },

  downarrow: {
    marginStart: 10,
    marginEnd: 21,
  },

  rightarrow: {
    marginTop: 21,
    marginBottom: 16,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginEnd: 16,
  },

  prefix: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 20,
    paddingRight: 6,
    fontFamily: 'UberMoveTextRegular',
  },

  consent: {
    fontSize: 12,
    lineHeight: 20,
    marginTop: 12,
    flexWrap: 'wrap',
    paddingRight: 6,
    width: '100%',
    fontFamily: 'UberMoveTextBold',
    color: '#888888'
  },

  consentContainer: {
    width: '100%',
  },

  input: {
    fontSize: 16,
    lineHeight: 24,
    marginStart: 12,
    color: '#A4A4A4',
    fontFamily: 'UberMoveTextRegular',
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

  nextButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
  },

  noCodeText: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: '#7F7F7F',
    fontFamily: 'UberMoveTextMedium',
    fontWeight: 500,
  },

  loginWithPasswordText: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: '#000000',
    fontFamily: 'UberMoveTextMedium',
    fontWeight: 500,
  },
});