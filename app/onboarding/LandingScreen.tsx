import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import UkFlagImage from '../components/UkFlagImage';
import DownArrowImage from '../components/DownArrowImage';

export default function LandingScreen() {
  const router = useRouter();
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

  useEffect(() => {
    if (phoneNumber.length === 10) {
      router.push('/onboarding/PhoneInputScreen');
    }
  }, [phoneNumber, router]);

  if (!fontsLoaded) return null;

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#FFFFFF' }} 
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.rootContainer}>
        <Image
          source={require('../../assets/images/landingimage.jpeg')}
          style={styles.image}
        />
        <Text style={styles.title}>Use your uber account to get started</Text>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <View style={styles.flag}>
              <UkFlagImage width={44} height={29} style={styles.flag} />
            </View>
            <Text style={styles.prefix}>+44</Text>
            <DownArrowImage style={styles.arrow} width={25} height={24} />
            <View style={styles.verticalLine}></View>
            <TextInput
              style={styles.input}
              placeholder="232 188 7651"
              placeholderTextColor="#A4A4A4"
              keyboardType="phone-pad"
              onChangeText={handleInputChange}
              value={phoneNumber}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    rootContainer: {
      backgroundColor: '#FFFFFF',
      paddingTop: StatusBar.currentHeight
    },
    container: {
      backgroundColor: '#FFFFFF',
      marginHorizontal: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 524,
      resizeMode: 'cover',
    },
    title: {
      marginHorizontal: 15,
      marginTop: 11,
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 36,
      letterSpacing: 0,
      fontFamily: 'UberMoveTextBold',
      textAlign: 'left',
    },
    inputContainer: {
      marginTop: 19,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#E6E6E6',
      backgroundColor: '#F5F5F5',
      width: '100%',
    },
    flag: {
      marginStart: 14,
      marginRight: 0,
    },
    prefix: {
      fontSize: 16,
      letterSpacing: 0,
      fontWeight: 400,
      lineHeight: 24,
      marginStart: 10,
      fontFamily: 'UberMoveTextRegular',
      width: 35,
      textAlign: 'center',
    },
    arrow: {
      width: 12,
      height: 8,
      marginStart: 4,
      marginRight: 5,
    },
    input: {
      flex: 1,
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0,
      fontWeight: 400,
      color: '#A4A4A4',
      paddingTop: 16,
      paddingBottom: 11,
      fontFamily: 'UberMoveTextRegular',
    },

    verticalLine: {
      marginTop: 14,
      marginBottom: 11,
      marginStart: 5,
      marginEnd: 20,
      height: 26,
      width: 1,
      backgroundColor: '#FFFFFF',
    },
  });