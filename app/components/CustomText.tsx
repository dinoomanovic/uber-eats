import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const fontMap = {
    'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
    'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
    'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
    'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
};

const CustomText = ({ style, fontFamily, children, ...props }) => {
    let [fontsLoaded] = useFonts({
        [fontFamily]: fontMap[fontFamily] || null,
    });

    if (!fontsLoaded && fontFamily) return null;

    return (
        <Text
            style={[styles.text, style, fontFamily ? { fontFamily: fontFamily } : null]}
            {...props}
        >
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        // No default font family here, it will be applied via props
    },
});

export default CustomText;