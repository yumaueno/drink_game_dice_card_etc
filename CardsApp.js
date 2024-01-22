import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CardsApp = () => {
  const [deck, setDeck] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    initializeDeck();
  }, []);

  const initializeDeck = () => {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let newDeck = suits.flatMap(suit => {
      return ranks.map(rank => ({ rank, suit }));
    });
    newDeck = shuffleDeck([...newDeck]);
    setDeck(newDeck);
    setCurrentCard(null);
  };

  const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  };

  const drawCard = () => {
    if (deck.length > 0) {
      setCurrentCard(deck.pop());
      setDeck([...deck]);
    } else {
      alert('All cards are displayed.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={initializeDeck}>
        <Text style={styles.buttonText}>restart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={drawCard}>
        <Text style={styles.buttonText}>flip over a card</Text>
      </TouchableOpacity>
      {currentCard && (
        <View style={styles.card}>
          <Text style={styles.cardText}>{`${currentCard.rank} of ${currentCard.suit}`}</Text>
          {/* ここにカードの画像を表示する場合、Imageコンポーネントを使用 */}
          {/* <Image source={require(`./path/to/card/images/${currentCard.rank}_of_${currentCard.suit}.png`)} style={styles.cardImage} /> */}
        </View>
      )}
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
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  cardText: {
    fontSize: 18,
  },
});

export default CardsApp;
