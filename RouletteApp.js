import React, { useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Image } from 'react-native';

const RouletteApp = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    const spinRoulette = () => {
        // ランダムな回転回数と角度を生成
        const randomRotation = Math.floor(Math.random() * 5 + 1); // 1回から5回の間でランダムな回転回数
        const randomAngle = Math.floor(Math.random() * 360); // 0から360度までランダムな角度

        const toValue = randomRotation * 360 + randomAngle;

        // アニメーションをリセット
        spinValue.setValue(0);

        // アニメーション開始
        Animated.timing(spinValue, {
            toValue: toValue,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    };

    // 回転角度をインターポレート
    const spin = spinValue.interpolate({
        inputRange: [0, 360 * 5 + 360], // 最大6回転
        outputRange: ['0deg', `${360 * 5 + 360}deg`],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Image source={require('./assets/needle.png')} style={styles.needleImage} />
            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={spinRoulette}>
                <Text style={styles.buttonText}>Spin Roulette</Text>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    roulette: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rouletteImage: {
        width: 300,
        height: 300,
    },
    needleImage: {
        width: 100,
        height: 250,
        marginTop: 50, // 針の画像の位置を調整
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 50, // ボタンの位置を調整
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    needle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RouletteApp;
