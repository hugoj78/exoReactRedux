import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, ActivityIndicator, View, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';

import GetPokemon from './getPokemon';

const Character = ({navigation}) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [offSet, setOffSet] = useState({number: 0, numPage: 1});
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const limit = 15;
  const {colors} = useTheme();

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
        setTimeout(() => {
          setPokemon(res.data.results);
          setTotal(res.data.count);
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setPokemon([]);
      });
  }, [offSet]);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#53B7D2" />
      </View>
    );
  }

  return (
    <>
      {pokemon[0] ? (
        <View style={styles.container}>
          <GetPokemon
            pokemon={pokemon}
            offSet={offSet}
            setOffSet={setOffSet}
            limit={limit}
            total={total}
            pokemonDetail={pokemonDetail}
            setPokemonDetail={setPokemonDetail}
            setIsLoading={setIsLoading}
            colors={colors}
            navigation={navigation}
          />
        </View>
      ) : (
        <View style={[styles.container, styles.horizontal]}>
          <Button
            title="Retry"
            color={{color: colors.text}}
            onPress={() => console.log('zizi')}
          />
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
