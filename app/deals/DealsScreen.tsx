import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, useWindowDimensions, StatusBar } from 'react-native';
import { router } from 'expo-router';
import LeftArrowImage from '../components/LeftArrowImage';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import SearchIconImage from '../components/SearchIconImage';
import { useFonts } from 'expo-font';
import PromotionsTabImage from '../components/PromotionsTabImage';
import RewardsTabImage from '../components/RewardsTabImage';
import AdjustImageIcon from '../components/AdjustImageIcon';
import PickupImageIcon from '../components/PickupImageIcon';
import DownArrowImage from '../components/DownArrowImage';
import FloatingHeartButton from '../components/HeartImageIcon';
import ComeBackLaterCard from '../components/ComeBackLaterCard';

const DealsScreen = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    let [fontsLoaded] = useFonts({
        'UberMoveTextRegular': require('../../assets/fonts/UberMoveTextRegular.otf'),
        'UberMoveTextMedium': require('../../assets/fonts/UberMoveTextMedium.otf'),
        'UberMoveTextLight': require('../../assets/fonts/UberMoveTextLight.otf'),
        'UberMoveTextBold': require('../../assets/fonts/UberMoveTextBold.otf'),
    });

    if (!fontsLoaded) return null;

    const routes = [
        { key: 'offers', title: 'Offers' },
        { key: 'rewards', title: 'Rewards' },
    ];

    const renderScene = SceneMap({
        offers: () => <OffersTab />,
        rewards: () => <RewardsTab />,
    });

    const renderTabBar = (props) => (
        <View>
            <View style={styles.tabBar}>
                {routes.map((route, i) => (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.tabItem, { width: layout.width / 2 }]}
                        onPress={() => setIndex(i)}
                    >
                        <View style={styles.tabItemContent}>
                            <View style={styles.tabItemRow}>
                                {route.key === 'offers' ? (
                                    <PromotionsTabImage width={24} height={24} style={styles.tabIcon} />
                                ) : (
                                    <RewardsTabImage width={24} height={24} style={styles.tabIcon} />
                                )}
                                <Text style={[
                                    styles.tabText,
                                    index === i && styles.tabTextActive,
                                    route.key === 'offers' ? styles.offersTabText : styles.rewardsTabText, // Conditional styles
                                ]}>
                                    {route.title}
                                </Text>
                            </View>
                            {index === i && <View style={styles.tabIndicator} />}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.divider} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <LeftArrowImage width={20} height={18} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Deals</Text>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
                initialLayout={{ width: layout.width }}
            />
        </View>
    );
};

const OffersTab = () => {
    const offersCards = [
        {
            description: 'Papos Burgers',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/paposburgers.png'),
            badgeText: 'Spend US$20, save US$5',
        },
        {
            description: 'Zizza Italiano',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/zizzaitaliano.png'),
            badgeText: 'Save on selected items',
        },
        {
            description: 'Zizzy and Friends',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/zizzyandfriends.png'),
            badgeText: 'Spend US$20, save US$5',
        },
        {
            description: 'Quernos',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/quernos.png'),
            badgeText: 'Save on selected items',
        },
        {
            description: 'Leny Foods',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/lenyfoods.png'),
            badgeText: 'Save on selected items',
        },
    ];

    const offersCardsSecond = [
        {
            description: 'Crop Rool Restaurant',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/croprool.png'), 
            badgeText: '',
        },
        {
            description: 'Slads Place',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            badgeText: 'Save on selected items',
            image: require('../../assets/images/sladsplace.png'), 
        },
        {
            description: 'Pie Retreat',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/pieretreat.png'), 
            badgeText: 'Save on selected items',
        },
        {
            description: 'Mirashe',
            delivery: '$0.35 Delivery Fee • 30-35 min',
            score: '4.1',
            image: require('../../assets/images/mirashe.png'), 
            badgeText: '',
        },
    ];

    const pillItems = [
        <View key="adjust" style={styles.pillItem}><AdjustImageIcon width={24} height={24} /></View>,
        <View key="pickup" style={styles.pillItem}><PickupImageIcon width={24} height={24} /><Text style={styles.pillText}> Pick-up</Text></View>,
        <View key="sort" style={styles.pillItem}><Text style={styles.pillText}> Sort </Text><DownArrowImage width={24} height={24} /></View>,
        <View key="best-overall" style={styles.pillItem}><Text style={styles.pillText}> Best overall </Text></View>,
        <View key="dietry" style={styles.pillItem}><Text style={styles.pillText}> Dietry </Text><DownArrowImage width={24} height={24} /></View>,
        <View key="max-delivery" style={styles.pillItem}><Text style={styles.pillText}> Max delivery fee </Text><DownArrowImage width={24} height={24} /></View>,
        <View key="price-range" style={styles.pillItem}><Text style={styles.pillText}> Price range </Text><DownArrowImage width={24} height={24} /></View>,
    ];

    return (
        <ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.pillContainer}>
                {pillItems.map((item, index) => {
                    let itemStyle = styles.pillItem;
                    if (index > 0 && index < pillItems.length - 1) {
                        itemStyle = { ...styles.pillItem, marginHorizontal: 4 };
                    }
                    return <View key={`pill-${index}`} style={itemStyle}>{item.props.children}</View>;
                })}
            </ScrollView>
            {offersCards.map((card, index) => (
                <View key={index} style={index === offersCards.length - 1 ? { marginBottom: 59 } : null}>
                    <Card {...card} />
                </View>
            ))}
            <View style={styles.dividerContainer} />
            <ComeBackLaterCard />
            <View style={styles.dividerContainer} />
            {offersCardsSecond.map((card, index) => (
                <View key={index} style={index === offersCardsSecond.length - 1 ? { marginBottom: 59 } : null}>
                    <Card {...card} />
                </View>
            ))}
        </ScrollView>
    );
};

const RewardsTab = () => {
    const rewardsCards = [
        { description: 'Ice Cream Bar', delivery: '$0.35 Delivery Fee • 30-35 min', score: '4.1', image: require('../../assets/images/icecreambar.png'), badgeText: '' },
        { description: 'Coco Restaurant', delivery: '$0.35 Delivery Fee • 30-35 min', score: '4.1', image: require('../../assets/images/cocorestaurant.png'), badgeText: '' },
        { description: 'Cherrp', delivery: '$0.35 Delivery Fee • 30-35 min', score: '4.1', image: require('../../assets/images/cherrp.png'), badgeText: '' },
        { description: 'Lizzy’s Home', delivery: '$0.35 Delivery Fee • 30-35 min', score: '4.1', image: require('../../assets/images/lizzyshome.png'), badgeText: '' },
        { description: 'Iguanas', delivery: '$0.35 Delivery Fee • 30-35 min', score: '4.1', image: require('../../assets/images/iguanas.png'), badgeText: '' },
        { description: 'Shirppy Cos', delivery: '$0.35 Delivery Fee • 30-35 min', score: '4.1', image: require('../../assets/images/shirppycos.png'), badgeText: '' },
    ];

    return (
        <ScrollView style={styles.tabContent}>
            <Text style={styles.rewardsTitle}>Earn restaurant rewards</Text>
            {rewardsCards.map((card, index) => (
                <View key={index} style={index === rewardsCards.length - 1 ? { marginBottom: 59 } : null}>
                    <Card {...card} />
                </View>
            ))}
        </ScrollView>
    );
};

const Card = ({ description, delivery, score, image, badgeText }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.cardImage} />
            <FloatingHeartButton position="top-right" />
            {badgeText !== '' && <BadgeBanner badgeText={badgeText} />}
            <View style={styles.cardContent}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.cardDescription}>{description}</Text>
                    <View style={styles.cardScore}>
                        <Text style={styles.scoreText}>{score}</Text>
                    </View>
                </View>
                <Text style={styles.cardDelivery}>{delivery}</Text>
            </View>
        </View>
    );
};

const BadgeBanner = ({ badgeText }) => {
    return (
        <View style={[styles.badgeBanner]}>
            <Text style={styles.badgeText}>{badgeText}</Text>
        </View>
    );
};
  

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF', paddingTop: StatusBar.currentHeight },
    header: { flexDirection: 'row', alignItems: 'center', padding: 16, justifyContent: 'center', position: 'relative' },
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
        backgroundColor: '#FF4444',
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
    backButton: { position: 'absolute', left: 16 },
    headerTitle: { fontSize: 20, lineHeight: 28, letterSpacing: 0, fontWeight: 400, fontFamily: 'UberMoveTextRegular', },
    divider: { height: 5, backgroundColor: '#E8E8E8' },
    dividerContainer: { height: 10.34, backgroundColor: '#E8E8E8' },

    tabBar: { flexDirection: 'row', backgroundColor: 'white' },
    tabItem: { alignItems: 'center', justifyContent: 'center' },
    tabItemContent: { alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
    tabItemRow: { flexDirection: 'row', alignItems: 'center' },
    tabIcon: { marginRight: 4 },
 tabText: {
        color: '#6B6B6B',
        fontWeight: '400',
        fontFamily: 'UberMoveTextRegular',
        fontSize: 18,
        lineHeight: 22,
        letterSpacing: 0,
    },
    offersTabText: {
        paddingTop: 6, 
    },
    rewardsTabText: {
        paddingTop: 2,
    },
    tabTextActive: { color: 'black' },
    tabIndicator: {
        backgroundColor: 'black',
        height: 5,
        width: '100%',
        marginTop: 2,
        position: 'absolute',
        bottom: 0,
    },
    rewardsTitle: {
        fontSize: 22, 
        fontWeight: '500', 
        fontFamily: 'UberMoveTextMedium',
        lineHeight: 36, 
        letterSpacing: 0, 
        marginTop: 16,
        marginBottom: 8,
        paddingHorizontal: 16,
    },
    card: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    cardImage: { width: '100%', height: 150, marginBottom: 8 },
    cardContent: { width: '100%' },
    cardDescription: { fontSize: 16.55, lineHeight: 20.69, letterSpacing:0, fontFamily: 'UberMoveTextBold',  fontWeight: 500 },
    cardDelivery: { fontSize: 14.48, letterSpacing:0, lineHeight: 20.69, fontFamily: 'UberMoveTextRegular', color: '#6B6B6B' },
    cardScore: { width: 27, height: 27, borderRadius: 20, backgroundColor: '#EEEEEE', justifyContent: 'center', alignItems: 'center' },
    scoreText: { fontSize: 12.41, fontWeight: 400, fontFamily: 'UberMoveTextRegular', letterSpacing: 0, lineHeight: 20.69 },
    pillContainer: { flexDirection: 'row', marginTop: 8, marginBottom: 8, marginStart: 16},
    pillItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F6F6F6', borderRadius: 90, paddingHorizontal: 16, marginHorizontal: 4, height: 36},
    pillText: { fontSize: 16, fontFamily: 'UberMoveTextMedium', fontWeight: 500, lineHeight: 20, letterSpacing: 0, marginLeft: 4, marginRight: 4 },
    tabContent: { flex: 1 },
    badgeBanner: {
        position: 'absolute',
        width: 214,
        height: 25,
        top: 30,
        left: 16,
        paddingVertical: 2,
        backgroundColor: '#34A853',
        borderTopRightRadius: 51.72,
        borderBottomRightRadius: 51.72,
        zIndex: 1000,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      badgeText: {
        color: 'white',
        fontWeight: 500,
        lineHeight: 20.69,
        letterSpacing: 0,
        fontSize: 14,
        fontFamily: 'UberMoveTextRegular',
        textAlign: 'center',
      },
});


export default DealsScreen;