import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ComeBackLaterCard = () => {
    return (
        <View style={styles.comeBackLaterCard}>
            <View style={styles.illustrationHead}>
                <View style={styles.headMark1} />
                <View style={styles.headMark2} />
                <View style={styles.headMark3} />
                <View style={styles.headMark4} />
                <View style={styles.headMark5} />
            </View>
            <Image source={require('../../assets/images/comebacklatermarks.png')} style={styles.comeBackLaterImage} />

            <View style={styles.notice}>
                <Text style={styles.comeBackLaterTitle}>Come back later for new deals</Text>
                <Text style={styles.comeBackLaterSubtitle}>Until then, browse these tasty options at everyday prices</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    comeBackLaterCard: {
        width: 392,
        height: 168,
        position: 'relative',
    },
    illustrationHead: {
        position: 'absolute',
        width: 122,
        height: 8,
        left: 128,
        top: 29.66,
        flexDirection: 'row',
    },
    headMark1: {
        width: 70,
        height: 8,
        backgroundColor: '#7E2DD0',
        borderRadius: 50,
    },
    headMark2: {
        width: 8,
        height: 8,
        backgroundColor: '#7E2DD0',
        borderRadius: 50,
        marginLeft: 5,
    },
    headMark3: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(126, 45, 208, 0.6)',
        borderRadius: 50,
        marginLeft: 5,
    },
    headMark4: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(126, 45, 208, 0.3)',
        borderRadius: 50,
        marginLeft: 5,
    },
    headMark5: {
        width: 8,
        height: 8,
        backgroundColor: 'rgba(231, 192, 146, 0.6)',
        borderRadius: 50,
        marginLeft: 5,
    },
    comeBackLaterImage: {
        width: 392,
        height: 126,
        resizeMode: 'contain',
        position: 'absolute',
        top: 43.66, // Added marginTop
    },
    illustrationMarks: {
        position: 'absolute',
        width: 392,
        height: 89,
        top: 45,
        flexDirection: 'row',
    },
    mark1: {
        width: 219,
        height: 68,
        backgroundColor: 'rgba(126, 45, 208, 0.1)',
    },
    mark2: {
        width: 114,
        height: 30,
        backgroundColor: 'rgba(126, 45, 208, 0.3)',
        position: 'absolute',
        top: 39,
    },
    mark3: {
        width: 32,
        height: 22,
        backgroundColor: 'rgba(126, 45, 208, 0.15)',
        borderRadius: 50,
        position: 'absolute',
        top: 57,
        left: 271,
    },
    mark4: {
        width: 33,
        height: 42,
        backgroundColor: 'rgba(126, 45, 208, 0.15)',
        borderRadius: 50,
        position: 'absolute',
        top: 47,
        left: 314,
    },
    mark5: {
        width: 32,
        height: 22,
        backgroundColor: 'rgba(126, 45, 208, 0.15)',
        borderRadius: 50,
        position: 'absolute',
        top: 57,
        left: 360,
    },
    notice: {
        position: 'absolute',
        width: 278,
        height: 81,
        left: 50,
        top: 37,
        alignItems: 'center',
    },
    comeBackLaterTitle: {
        fontSize: 16,
        fontWeight: '500',
        top: 29,
        fontFamily: 'UberMoveTextMedium',
        lineHeight: 24,
        color: '#000000',
    },
    comeBackLaterSubtitle: {
        fontSize: 16,
        fontFamily: 'UberMoveTextRegular',
        lineHeight: 24,
        top: 38,
        color: '#6B6B6B',
        textAlign: 'center',
    },
});

export default ComeBackLaterCard;