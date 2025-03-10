import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, StatusBar, useWindowDimensions } from 'react-native';
import { router } from 'expo-router';
import LeftArrowImage from '../components/LeftArrowImage';
import SearchIconImage from '../components/SearchIconImage';

interface SearchScreenProps {
    onBack: () => void;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ onBack }) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);

    const routes = [
        { key: 'all', title: 'All' },
        { key: 'restaurants', title: 'Restaurants' },
        { key: 'grocery', title: 'Grocery' },
        { key: 'convenience', title: 'Convenience' },
        { key: 'alcohol', title: 'Alcohol' },
    ];

    const recentSearches = ['Cafe', 'Irish'];
    const topCategories = ['Breakfast and brunch', 'Coffee and tea', 'Chinese', 'Indian', 'Latest Deals', 'Restaurant Rewards', 'Best Overall', 'Nationwide Shipping', 'Mexican', 'Fast Food', 'Healthy', 'Pizza', 'Sandwich', 'Asian', 'Bakery'];

    const handleItemClick = () => {
        router.push('/deals/DealsScreen');
    };

    const renderTabBar = () => (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tabScroll}>
            <View style={styles.tabBar}>
                {routes.map((route, i) => (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.tabItem, { minWidth: layout.width / routes.length }]}
                        onPress={() => setIndex(i)}
                    >
                        <View style={styles.tabItemContent}>
                            <Text style={[styles.tabText, index === i && styles.tabTextActive]}>
                                {route.title}
                            </Text>
                            <View style={[styles.indicatorContainer, { bottom: 2 }]} />

                            {index === i && <View style={[styles.tabIndicator, { bottom: 2 }]} />}
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.tabBarBottomBorder} />
        </ScrollView>
    );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={true} contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.searchBarContainer}>
                <TouchableOpacity style={styles.arrowIcon} onPress={onBack}>
                    <LeftArrowImage width={20} height={18} />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchBarInput}
                    placeholder="Food, shopping, drinks, etc"
                    placeholderTextColor="#000000"
                />
            </View>
            <View style={styles.tabBarContainer}>
                {renderTabBar()}
            </View>

            <View style={styles.category}>
                <Text style={styles.categoryTitle}>Recent searches</Text>
                {recentSearches.map((item, index) => (
                    <TouchableOpacity key={index} onPress={handleItemClick}>
                        <View style={styles.itemContainer}>
                            <SearchIconImage style={styles.searchIcon} />
                            <Text style={styles.itemText}>{item}</Text>
                        </View>
                        {index < recentSearches.length && <View style={styles.divider} />}
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.category}>
                <Text style={styles.categoryTitle}>Top Categories</Text>
                {topCategories.map((item, index) => (
                    <TouchableOpacity key={index} onPress={handleItemClick}>
                        <View style={styles.itemContainer}>
                            <SearchIconImage style={styles.searchIcon} />
                            <Text style={styles.itemText}>{item}</Text>
                        </View>
                        {index < topCategories.length && <View style={styles.divider} />}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF', paddingTop: StatusBar.currentHeight },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
        marginHorizontal: 16,
        paddingHorizontal: 12,
        marginTop: 6,
        marginBottom: 16,
    },
    arrowIcon: {
        marginRight: 8,
    },
    searchBarInput: {
        flex: 1,
        height: 40,
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'UberMoveTextRegular',
        letterSpacing: 0,
        lineHeight: 20,
    },
    tabBarContainer: {
        backgroundColor: 'white',
        height: 45,
    },
    category: {
        marginTop: 16,
        marginStart: 24
    },
    categoryTitle: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0,
        fontWeight: 400,
        marginBottom: 8,
        fontFamily: 'UberMoveTextRegular',
        color: '#6B6B6B'
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8
    },
    itemText: {
        fontSize: 16,
        marginLeft: 22,
        fontFamily: 'UberMoveTextMedium',
        fontWeight: 500,
        lineHeight: 24,
        letterSpacing: 0
    },
    searchIcon: {
        width: 15,
        height: 15,
        marginLeft: 9
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#E8E8E8',
        marginLeft: 47,
        marginTop: 5,
    },
    scene: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    tabBarBottomBorder: {
        height: 5,
        backgroundColor: '#E8E8E8',
    },
    scrollViewContent: {
        paddingBottom: 105,
    },
    tabBar: { flexDirection: 'row', backgroundColor: 'white' },
    tabItem: { alignItems: 'center', justifyContent: 'center' },
    tabItemContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8, 
        flexWrap: 'wrap',
    },
    tabText: {
        color: '#000000',
        fontWeight: '400',
        fontFamily: 'UberMoveTextRegular',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0,
    },
    tabTextActive: { color: 'black' },
    tabIndicator: {
        backgroundColor: 'black',
        height: 5,
        width: '100%',
        position: 'absolute',
        bottom: 2,
    },
    indicatorContainer: {
        backgroundColor: '#e8e8e8',
        height: 5,
        width: '100%',
        position: 'absolute',
        bottom: 2,
    },
    tabScroll: {
        backgroundColor: '#E8E8E8',
        position: 'relative', // Add relative positioning
    },
});

export default SearchScreen;