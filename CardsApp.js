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

  const getSuitImage = (suit) => {
    const suitImages = {
      'Hearts': require('./assets/heart.png'),
      'Diamonds': require('./assets/diamond.png'),
      'Clubs': require('./assets/club.png'),
      'Spades': require('./assets/spade.png')
    };
    return suitImages[suit];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={initializeDeck}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={drawCard}>
        <Text style={styles.buttonText}>Flip Over a Card</Text>
      </TouchableOpacity>
      {currentCard && (
        <View style={styles.card}>
          <Text style={styles.cardRank}>{currentCard.rank}</Text>
          <Image source={getSuitImage(currentCard.suit)} style={styles.suitImage} />
          <Text style={[styles.cardRank, styles.cardRankBottom]}>{currentCard.rank}</Text>
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
  cardRank: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  suitImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  cardRankBottom: {
    top: undefined,
    bottom: 5,
    left: undefined,
    right: 5,
    transform: [{ rotate: '180deg' }],
  },
});

export default CardsApp;