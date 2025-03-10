import * as React from "react";
import { TouchableOpacity, StyleSheet, Animated, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const HeartImageIcon = (props) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.402 5.74243C19.9882 5.74243 21.5399 7.70797 21.5399 10.0873C21.5399 11.3287 20.9192 12.4667 20.1951 13.2943C18.9537 14.5356 13.264 19.1909 13.264 19.1909C13.264 19.1909 7.57425 14.5356 6.33285 13.2943C5.50526 12.4667 4.98801 11.3287 4.98801 10.0873C4.98801 7.70797 6.53975 5.74243 9.12599 5.74243C10.8846 5.74243 12.5398 7.39763 13.264 8.84592C13.9881 7.39763 15.6433 5.74243 17.402 5.74243ZM17.402 2.63895C15.8502 2.63895 14.4019 3.25964 13.264 4.08724C12.126 3.15619 10.6777 2.63895 9.12599 2.63895C4.98801 2.63895 1.88452 5.84588 1.88452 10.0873C1.88452 12.0529 2.71212 13.9149 4.16041 15.4667C5.60871 17.0184 13.264 23.2254 13.264 23.2254C13.264 23.2254 20.9192 17.0184 22.3675 15.4667C23.8158 13.9149 24.6434 12.0529 24.6434 10.0873C24.6434 5.84588 21.5399 2.63895 17.402 2.63895Z"
      fill="white"
    />
  </Svg>
);

const FloatingHeartButton = ({ onPress, position = 'bottom-right' }) => {
    const getButtonPosition = () => {
      switch (position) {
        case 'bottom-right':
          return { bottom: 20, right: 20 };
        case 'bottom-left':
          return { bottom: 20, left: 20 };
        case 'top-right':
          return { top: 20, right: 20 };
        case 'top-left':
          return { top: 20, left: 20 };
        default:
          return { bottom: 20, right: 20 };
      }
    };
  
    return (
      <View style={[styles.floatingButton, getButtonPosition()]}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.button}
          activeOpacity={0.8}
        >
          <HeartImageIcon />
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    floatingButton: {
      position: 'absolute',
      zIndex: 1000,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      paddingTop: 11.72,
      paddingEnd: 4.77,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default FloatingHeartButton;