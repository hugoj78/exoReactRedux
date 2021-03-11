import React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';

import DisplayPokemonDetail from './displayPokemonDetail';

const PokemonDetail = ({setIsToken, route}) => {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${route.params.id}`,
    })
      .then((res) => {
        setTimeout(() => {
          setPokemon(res.data);
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [route.params.id]);

  return (
    <>
      {!isLoading ? (
        <DisplayPokemonDetail pokemon={pokemon} />
      ) : (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  vertical: {
    top: 200,
  },
});

export default PokemonDetail;
