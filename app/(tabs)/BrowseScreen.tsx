import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomTextInput from '../components/CustomTextInput';
import SearchScreen from '../search/SearchScreen';

const categories = [
    { id: 1, name: 'Breakfast &\n brunch', image: require('../../assets/images/breakfast.png') },
    { id: 2, name: 'Coffee & tea', image: require('../../assets/images/coffeetea.png') },
    { id: 3, name: 'Deals', image: require('../../assets/images/deals.png') },
    { id: 4, name: 'Restaurant\n Rewards', image: require('../../assets/images/restaurantrewards.png') },
    { id: 5, name: 'Best overall', image: require('../../assets/images/bestoverall.png') },
    { id: 6, name: 'Shipped free', image: require('../../assets/images/freeshipping.png') },
];

const allCategories = [
    { id: 7, name: 'Mexican', image: require('../../assets/images/mexican.png') },
    { id: 8, name: 'Fast Food', image: require('../../assets/images/fastfood.png') },
    { id: 9, name: 'Healthy', image: require('../../assets/images/healthy.png') },
    { id: 10, name: 'Pizza', image: require('../../assets/images/pizza.png') },
    { id: 11, name: 'Asian', image: require('../../assets/images/asian.png') },
    { id: 12, name: 'Bakery', image: require('../../assets/images/bakery.png') },
    { id: 13, name: 'Sandwich', image: require('../../assets/images/sandwich.png') },
    { id: 14, name: 'Sushi', image: require('../../assets/images/sushi.png') },
    { id: 15, name: 'Korean', image: require('../../assets/images/korean.png') },
    { id: 16, name: 'Vietnamese', image: require('../../assets/images/vietnamese.png') },
    { id: 17, name: 'Vegan', image: require('../../assets/images/vegan.png') },
    { id: 18, name: 'Bubble Tea', image: require('../../assets/images/bubbletea.png') },
    { id: 19, name: 'Juice & Smoothies', image: require('../../assets/images/juicesmoothies.png') },
    { id: 20, name: 'Burgers', image: require('../../assets/images/burgers.png') },
];

const CategoryItem = ({ name, image }) => {
    return (
        <View style={styles.categoryContainer}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.categoryImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.categoryText}>{name}</Text>
            </View>
        </View>
    );
};

export default function BrowseScreen() {
    const [showSearchScreen, setShowSearchScreen] = useState(false);

    const handleSearchPress = () => {
        setShowSearchScreen(true);
    };

    const handleBackFromSearch = () => {
        setShowSearchScreen(false);
    };

    return (
        <View style={{ flex: 1 }}>
            {showSearchScreen ? (
                <SearchScreen onBack={handleBackFromSearch} />
            ) : (
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.scrollViewContent} // Add contentContainerStyle
                >
                    <View style={styles.searchBarContainer}>
                        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
                        <TouchableOpacity
                            style={{ flex: 1 }}
                            onPress={handleSearchPress}
                        >
                            <CustomTextInput
                                style={styles.searchBar}
                                placeholder="Food, shopping, drinks, etc"
                                placeholderTextColor="#000000"
                                fontFamily="UberMoveTextRegular"
                                editable={false}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.titleTopCategories}>Top Categories</Text>
                    <View style={styles.categoriesGrid}>
                        {categories.map((category) => (
                            <CategoryItem key={category.id} name={category.name} image={category.image} />
                        ))}
                    </View>
                    <Text style={styles.titleAllCategories}>All Categories</Text>
                    <View style={styles.allCategoriesGrid}>
                        {allCategories.map((category) => (
                            <CategoryItem key={category.id} name={category.name} image={category.image} />
                        ))}
                    </View>
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    categoryContainer: {
        width: '48%',
        height: 139,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 15,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: 98,
    },
    textContainer: {
        width: '100%',
        height: 41,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    categoryImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    categoryText: {
        fontSize: 16,
        fontFamily: 'UberMoveTextRegular',
        fontWeight: 400,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
        paddingTop: StatusBar.currentHeight
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderRadius: 20,
        marginTop:6,
        marginBottom: 11,
    },
    searchIcon: {
        marginRight: 8,
        marginStart: 11
    },
    searchBar: {
        flex: 1,
        height: 40,
        color: '#000000',
        fontSize: 16,
        fontWeight: 400,
        fontFamily: 'UberMoveTextRegular',
        letterSpacing: 0,
        lineHeight: 20
    },
    titleTopCategories: {
        fontSize: 24,
        fontFamily: 'UberMoveTextMedium',
        fontWeight: 500,
        lineHeight: 36,
        letterSpacing: 0,
        marginBottom: 11,
    },
    titleAllCategories: {
        fontSize: 24,
        fontFamily: 'UberMoveTextMedium',
        fontWeight: 500,
        lineHeight: 36,
        letterSpacing: 0,
        marginBottom: 16,
    },
    categoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 27,
    },
    allCategoriesGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    scrollViewContent: {
        paddingBottom: 49, // Add bottom padding
    },
});