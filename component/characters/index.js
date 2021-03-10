import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Button,
  Text,
  Alert,
  View,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

import {publicKey, timeStamp, hash} from '../../config/api';
import ShowAllCharacter from './showAll';

const Character = () => {
  const [pokemon, setPokemon] = useState([]);
  const [offSet, setOffSet] = useState({number: 0, numPage: 1});
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const limit = 15;

  const decrease = () => {
    if (offSet.numPage > 1) {
      setOffSet({
        ...offSet,
        number: offSet.number - limit,
        numPage: offSet.numPage - 1,
      });
    }
  };

  const increase = () => {
    if (offSet.numPage < total / limit) {
      setOffSet({
        ...offSet,
        number: offSet.number + limit,
        numPage: offSet.numPage + 1,
      });
    }
  };

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/',
      params: {
        limit: limit,
        offset: offSet.number,
      },
    })
      .then((res) => {
        setPokemon(res.data.results);
        setTotal(res.data.count);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [offSet]);

  return (
    <>
      <ShowAllCharacter pokemon={pokemon} />
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonLeft}>
          <Button title="<" onPress={decrease} />
        </View>
        <Text>{offSet.numPage}</Text>
        <View style={styles.buttonRight}>
          <Button title=">" onPress={increase} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLeft: {
    textAlign: 'center',
    right: 50,
    top: 27,
  },
  buttonRight: {
    textAlign: 'center',
    left: 50,
    bottom: 27,
  },
});

export default Character;
