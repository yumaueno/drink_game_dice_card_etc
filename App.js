import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiceApp from './DiceApp'; 
import CardsApp from './CardsApp'
import CoinApp from './CoinApp';
import RouletteApp from './RouletteApp'; 

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chose the Game</Text>
      <Button
        title="Dice"
        onPress={() => navigation.navigate('Dice')}
      />
      <Button
        title="Cards"
        onPress={() => navigation.navigate('Cards')}
      />
      <Button
        title="Coin"
        onPress={() => navigation.navigate('Coin')}
      />
      <Button
        title="Roulette"
        onPress={() => navigation.navigate('Roulette')}
      />
    </View>
  );
}

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
