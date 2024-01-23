import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DiceApp = () => {
  const [diceCount, setDiceCount] = useState(1);
  const [diceValues, setDiceValues] = useState([1]);

  // サイコロの目の画像ファイルへのパス
  const diceImages = {
    1: require('./assets/dice1.png'),
    2: require('./assets/dice2.png'),
    3: require('./assets/dice3.png'),
    4: require('./assets/dice4.png'),
    5: require('./assets/dice5.png'),
    6: require('./assets/dice6.png'),
  };

  const rollDice = () => {
    const newDiceValues = [];
    for (let i = 0; i < diceCount; i++) {
      newDiceValues.push(Math.floor(Math.random() * 6) + 1);
    }
    setDiceValues(newDiceValues);
  };

  const totalValue = diceValues.reduce((acc, curr) => acc + curr, 0);


  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Text style={styles.DiceNumText}>Number of Dice</Text>
        <Picker
          selectedValue={diceCount}
          style={styles.picker}
          onValueChange={(itemValue) => {
            setDiceCount(itemValue);
            setDiceValues(new Array(itemValue).fill(1));
          }}
        >
          <Picker.Item label="1 dice" value={1} />
          <Picker.Item label="2 dice" value={2} />
          <Picker.Item label="3 dice" value={3} />
        </Picker>
      </View>

      <View style={styles.diceContainer}>
        {diceValues.map((value, index) => (
          <Image key={index} source={diceImages[value]} style={styles.diceImage} />
        ))}
      </View>

      <Text style={styles.totalText}>Total: {totalValue}</Text>

      <TouchableOpacity style={styles.button} onPress={rollDice}>
        <Text style={styles.buttonText}>Roll the Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  pickerContainer: {
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: 150,
  },
  diceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage: {
    width: 50,
    height: 50,
    marginTop: 100,
  },
  totalText: {
    fontSize: 24,
    marginBottom: 10,
  },
  DiceNumText: {
    fontSize: 24
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
});

export default DiceApp;