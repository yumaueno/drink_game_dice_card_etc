import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiceApp from './DiceApp';
import CardsApp from './CardsApp';
import CoinApp from './CoinApp';
import RouletteApp from './RouletteApp';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the Game</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Dice')}
      >
        <Text style={styles.buttonText}>Dice</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cards')}
      >
        <Text style={styles.buttonText}>Cards</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Coin')}
      >
        <Text style={styles.buttonText}>Coin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Roulette')}
      >
        <Text style={styles.buttonText}>Roulette</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Dice" component={DiceApp} />
        <Stack.Screen name="Cards" component={CardsApp} />
        <Stack.Screen name="Coin" component={CoinApp} />
        <Stack.Screen name="Roulette" component={RouletteApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
