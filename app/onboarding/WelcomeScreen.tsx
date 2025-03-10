import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import RightArrowImage from '../components/RightArrowImage';
import AllSetImage from '../components/AllSetImage';

export default function EmailVerificationScreen() {
    const router = useRouter();

    const handleNextButtonPress = () => {
            router.push('/(tabs)/BrowseScreen');
    };

    let [fontsLoaded] = useFonts({
        'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
        'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
        'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
        'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
    });

    if (!fontsLoaded) return null;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

        <View style={styles.rootContainer}>

<AllSetImage style={styles.allSetImage} width={72} height={72} />


            <Text style={styles.title}>All Set.</Text>
            <View style={styles.container}>

            </View>
            <Text style={styles.tipText}>
            You’ll be signed into your account in a moment. If nothing happens, click continue
            </Text>

            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={[styles.nextButton, { backgroundColor: '#EEEEEE' }]} onPress={handleNextButtonPress}>
                    <View style={styles.nextButtonContent}>
                        <Text style={[styles.nextButtonText, { color: '#000000' }]}>Continue</Text>
                        <RightArrowImage style={styles.buttonRightArrow} width={21} height={18} fill={'#000000'} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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

  allSetImage: {
    marginTop: 62,
    marginLeft: 21
  },

  title: {
    marginHorizontal: 25,
    marginTop: 28,
    lineHeight: 28,
    fontSize: 20,
    fontWeight: 500,
    fontFamily: 'UberMoveTextMedium',
    textAlign: 'left',
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
    marginTop: 29,
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
    left: 16,
    right: 0,
    height: 54, 
    top: 28,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
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

  cantSignInText: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    color: '#000000',
    fontFamily: 'UberMoveTextMedium',
    fontWeight: 500,
  },

  tipText: {
    marginTop: 20,
    marginStart: 16,
    fontFamily: 'UberMoveTextRegular',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0,
  },
});