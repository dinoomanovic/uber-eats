import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const CustomTextInput = ({ style, placeholder, placeholderTextColor, ...props }) => {
    let [fontsLoaded] = useFonts({
        'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
        'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
        'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
        'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
    });


    if (!fontsLoaded) return null;

    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        fontFamily: 'UberMoveTextRegular',
    },
});

export default CustomTextInput;