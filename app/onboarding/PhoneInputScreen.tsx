import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import UkFlagImage from '../components/UkFlagImage';
import DownArrowImage from '../components/ChevronDownImage';
import RightArrowImage from '../components/RightArrowImage';
import GoogleButtonImage from '../components/GoogleButtonImage';

export default function PhoneInputScreen() {
    const router = useRouter();

    const handleGoogleButtonPress = () => {
        router.push('/onboarding/PasswordInputScreen'); 
      };

  let [fontsLoaded] = useFonts({
    'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
    'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
    'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
    'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
  });

  const [phoneNumber, setPhoneNumber] = useState('');
  const handleInputChange = (text) => {
    setPhoneNumber(text);
  };

  if (!fontsLoaded) return null; 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <KeyboardAvoidingView
                          style={{ flex: 1 }}
                          behavior={'padding'}
                        >
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.inputContainerFirst}>
            <View style={styles.flag}>
              <UkFlagImage width={44} height={29} />
            </View>
            <View style={styles.downarrow}>

            <DownArrowImage width={12} height={7} />
            </View>
          </View>

          <View style={styles.inputContainerSecond}>
            <Text style={styles.prefix}>+44</Text>
            <TextInput
              style={styles.input}
              placeholder="Mobile number"
              placeholderTextColor="#A4A4A4"
              keyboardType="phone-pad"
              onChangeText={handleInputChange}
              value={phoneNumber}
            />
          </View>
        </View>
        <Link href="/onboarding/PasswordInputScreen" style={styles.nextButton} >
        <View style={styles.nextButtonContent}>
          <Text style={styles.nextButtonText}>Next</Text>
          <View>
            <RightArrowImage width={21} height={18} />
          </View>
          </View>
        </Link>

        <View style={styles.consentContainer}>

        <Text style={styles.consent}>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from uber and its affiliates to the number provided.</Text>
        </View>
        <View style={styles.orContainer}>

        <View style={styles.horizontalLine}/>
        <Text style={styles.orText}>or</Text>
        <View style={styles.horizontalLine}/>

</View>

<TouchableOpacity style={styles.buttonGoogleContainer} onPress={handleGoogleButtonPress}>
  <GoogleButtonImage width={25} height={25} style={styles.buttonGoogleImage} />
  <Text style={styles.buttonGoogleText}>Continue with Google</Text>
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
    flexDirection: 'column',
        justifyContent: 'center',
  },
  title: {
    marginStart: 26,
    marginHorizontal: 15,
    marginTop: 58,
    lineHeight: 28,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'UberMoveTextBold',
    textAlign: 'left',
  },
  rowContainer: { 
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%'
  },
  inputContainerFirst: {
    height: 50,
    marginTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    backgroundColor: '#F5F5F5',
    width: 'auto',
    marginRight: 5,
  },

  inputContainerSecond: {
    marginStart:12,
    height: 50,
    marginTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingEnd: 58,
    borderColor: '#E6E6E6',
    backgroundColor: '#F5F5F5',
    width: 'auto',
    marginRight: 5,
    flex: 1,
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
  
  nextButton: {
    width: '100%',
    marginTop: 20,
    backgroundColor: 'black',
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignItems: 'center', 
  },
  nextButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 2,
    justifyContent: 'space-between',
    width: '100%',
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 18,
    marginEnd: 50,
    marginStart: 139,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

orContainer: {
  height: 20,
  marginTop: 18,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},

orText: {
  fontSize: 14,
  marginStart: 5,
  textAlign: 'center',
  marginEnd: 25, 
  letterSpacing: 0,
  color: '#A4A4A4',
  fontFamily: 'UberMoveTextRegular',
},

horizontalLine: {
  paddingHorizontal: 10, 
  height: 1,
  marginEnd: 5,
  flex: 1, 
  backgroundColor: '#A4A4A4',
},

buttonGoogleImage: {
    marginStart: 15,
    alignContent: 'flex-start',
  },
  
  buttonGoogleContainer: {
    height: 50,
    marginTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    width: '100%', 
    justifyContent: 'space-between', 
  },
  buttonGoogleText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#000000',
    fontFamily: 'UberMoveTextBold',
    position: 'absolute',
    left: 0, 
    right: 0,
    textAlign: 'center', 
  },
});