import { Tabs } from 'expo-router';
import React from 'react';
import HomeIcon from '../components/HomeTabImage';
import BrowseTabImage from '../components/BrowseTabImage';
import GroceryTabImage from '../components/GroceryTabImage';
import BasketsTabImage from '../components/BasketsTabImage';
import AccountTabImage from '../components/AccountTabImage';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Tabs
        screenOptions={({ route, navigation }) => {
          const state = navigation.getState();
          const currentRouteName = state?.routes[state?.index]?.name;
          const isFocused = currentRouteName === route.name;

          return {
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              if (route.name === 'index') {
                icon = <HomeIcon focused={focused} color={color} size={size} />;
              } else if (route.name === 'BrowseScreen') {
                icon = <BrowseTabImage focused={focused} color={color} size={size} />;
              } else if (route.name === 'GroceryScreen') {
                icon = <GroceryTabImage focused={focused} color={color} size={size} />;
              } else if (route.name === 'BasketsScreen') {
                icon = <BasketsTabImage focused={focused} color={color} size={size} />;
              } else if (route.name === 'AccountScreen') {
                icon = <AccountTabImage focused={focused} color={color} size={size} />;
              }
              return icon;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#B5B5B5',
            tabBarLabelStyle: isFocused ? styles.tabLabelFocused : styles.tabLabel,
            headerShown: false,
            tabBarStyle: styles.tabBar,
          };
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
        <Tabs.Screen name="BrowseScreen" options={{ title: 'Browse' }} />
        <Tabs.Screen name="GroceryScreen" options={{ title: 'Grocery' }} />
        <Tabs.Screen name="BasketsScreen" options={{ title: 'Baskets' }} />
        <Tabs.Screen name="AccountScreen" options={{ title: 'Account' }} />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: 'UberMoveTextRegular',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: '#B5B5B5',
  },
  tabLabelFocused: {
    fontFamily: 'UberMoveTextRegular',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: '#000000',
  },
  tabBar: {
    position: 'absolute',
    width: '100%',
    height: 56,
    left: 1,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
});