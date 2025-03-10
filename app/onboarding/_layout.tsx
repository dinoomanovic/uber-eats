import { Stack } from 'expo-router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function OnboardingLayout() {
  return (
    <>
      <StatusBar style='dark' /> 
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingScreen" />
        <Stack.Screen name="PhoneInputScreen" />
        <Stack.Screen name="PasswordInputScreen" />
        <Stack.Screen name="PhoneVerificationScreen" />
        <Stack.Screen name="EmailVerificationScreen" />
        <Stack.Screen name="WelcomeScreen" />
      </Stack>
    </>
  );
}