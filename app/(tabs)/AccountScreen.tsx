import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import OrdersIconImage from '../components/OrdersIconImage';
import FavouritesIconImage from '../components/FavouritesIconImage';
import RewardsIconImage from '../components/RewardsIconImage';
import WalletIconImage from '../components/WalletIconImage';
import GiftIconImage from '../components/GiftIconImage';
import BusinessPreferencesIconImage from '../components/BusinessPreferencesIconImage';
import HelpIconImage from '../components/HelpIconImage';
import PromotionsIconImage from '../components/PromotionsIconImage';
import UberPassIconImage from '../components/UberPassIconImage';
import DeliverWithUberIconImage from '../components/DeliverWithUberIconImage';
import SettingsIconImage from '../components/SettingsIconImage';

const AccountScreen = () => {
        let [fontsLoaded] = useFonts({
            'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
            'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
            'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
            'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
        });
    const items = [
        { icon: <OrdersIconImage />, title: 'Orders' },
        { icon: <FavouritesIconImage />, title: 'Your favourites' },
        { icon: <RewardsIconImage />, title: 'Restaurant rewards' },
        { icon: <WalletIconImage />, title: 'Wallet' },
        { icon: <GiftIconImage />, title: 'Send a gift' },
        { icon: <BusinessPreferencesIconImage />, title: 'Business preferences', subtitle: 'Make work meals quicker and easier', subtitleColor: '#34A853' },
        { icon: <HelpIconImage />, title: 'Help' },
        { icon: <PromotionsIconImage />, title: 'Promotions' },
        { icon: <UberPassIconImage />, title: 'Uber Pass', subtitle: 'Join free for 1 month', subtitleColor: '#34A853' },
        { icon: <DeliverWithUberIconImage />, title: 'Deliver with Uber' },
        { icon: <SettingsIconImage />, title: 'Settings' },
    ];
    if (!fontsLoaded) return null;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/user.png')} style={styles.userImage} />
                <Text style={styles.userName}>John Doe</Text>
            </View>
            {items.map((item, index) => (
                <View key={index} style={styles.itemRow}>
                    {item.icon}
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        {item.subtitle && (
                            <Text style={[styles.itemSubtitle, { color: item.subtitleColor }]}>
                                {item.subtitle}
                            </Text>
                        )}
                    </View>
                </View>
            ))}
            <Text style={styles.aboutTitle}>About</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 19,
    },
    userImage: {
        width: 36,
        height: 36,
    },
    userName: {
        fontSize: 18,
        fontFamily: 'UberMoveTextRegular',
        fontWeight: '400',
        lineHeight: 22,
        marginLeft: 15,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 360,
        height: 56,
        marginTop: 11,
        paddingHorizontal: 26,
    },
    itemIcon: {
        marginRight: 16,
    },
    itemTextContainer: {
        flex: 1,
        marginStart: 28.5,

    },
    itemTitle: {
        fontFamily: 'UberMoveTextMedium',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0
    },
    itemSubtitle: {
        fontSize: 14,
        fontFamily: 'UberMoveTextMedium',
        fontWeight: 500,
        lineHeight: 20,
        letterSpacing: 0
    },
    aboutTitle: {
        fontSize: 12,
        fontFamily: 'UberMoveTextRegular',
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 20,
        marginStart: 22,
        marginTop: 21,
        marginBottom: 68
    },
});

export default AccountScreen;