import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

import GetPokemon from './getPokemon';

const Character = ({navigation}) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [offSet, setOffSet] = useState({number: 0, numPage: 1});
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const limit = 15;

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
      {!isLoading ? (
        <GetPokemon
          pokemon={pokemon}
          offSet={offSet}
          setOffSet={setOffSet}
          limit={limit}
          total={total}
          pokemonDetail={pokemonDetail}
          setPokemonDetail={setPokemonDetail}
          setIsLoading={setIsLoading}
          navigation={navigation}
        />
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
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default Character;
