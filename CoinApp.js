import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CoinApp = () => {
    const [coinSide, setCoinSide] = useState('heads'); // コインの面（表か裏）
    const [flipHistory, setFlipHistory] = useState([]); // 過去のフリップ結果の履歴

    // コインの画像ファイルへのパス
    const coinImages = {
        heads: require('./assets/coin1.png'),
        tails: require('./assets/coin2.png'),
    };

    const flipCoin = () => {
        const isHeads = Math.random() < 0.5;
        const newSide = isHeads ? 'heads' : 'tails';
        setCoinSide(newSide);
        setFlipHistory([newSide, ...flipHistory.slice(0, 9)]); // 最新の結果を追加し、古い結果を削除
    };

    return (
        <View style={styles.container}>
            <View style={styles.coinContainer}>
                <Image source={coinImages[coinSide]} style={styles.coinImage} />
            </View>

            <Text style={styles.sideText}>Current Side: {coinSide === 'heads' ? 'Heads' : 'Tails'}</Text>

            <TouchableOpacity style={styles.button} onPress={flipCoin}>
                <Text style={styles.buttonText}>Flip Coin</Text>
            </TouchableOpacity>

            {/* 過去のフリップ結果の表示 */}
            <View style={styles.historyContainer}>
                <Text style={styles.historyTitle}>Flip History (Last 10)</Text>
                {flipHistory.map((side, index) => (
                    <Text key={index} style={styles.historyText}>{index + 1}: {side}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    coinContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    coinImage: {
        width: 100,
        height: 100,
        marginBottom: 50,
    },
    sideText: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 10,
        width: '60%',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    historyContainer: {
        marginTop: 20,
    },
    historyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    historyText: {
        fontSize: 16,
    },
});

export default CoinApp;
