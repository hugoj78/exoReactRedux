import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Button,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

import DisplayPokemon from '../displayPokemon';

const GetPokemon = ({
  pokemon,
  offSet,
  setOffSet,
  limit,
  total,
  pokemonDetail,
  setPokemonDetail,
  setIsLoading,
  colors,
  navigation,
}) => {
  useEffect(() => {
    getPokemonDetail();
  }, [pokemon]);

  const getPokemonDetail = async () => {
    const results = Promise.all(
      pokemon.map((item) => {
        return axios({
          method: 'get',
          url: item.url,
        })
          .then((data) => {
            return data.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }),
    );
    const result = await Promise.resolve(results);
    setPokemonDetail(result);
  };

  const decrease = () => {
    if (offSet.numPage > 1) {
      setIsLoading(true);
      setPokemonDetail([]);
      setOffSet({
        ...offSet,
        number: offSet.number - limit,
        numPage: offSet.numPage - 1,
      });
    }
  };

  const increase = () => {
    if (offSet.numPage < total / limit) {
      setIsLoading(true);
      setPokemonDetail([]);
      setOffSet({
        ...offSet,
        number: offSet.number + limit,
        numPage: offSet.numPage + 1,
      });
    }
  };

  const renderItem = ({item}) => {
    return (
      <>
        <DisplayPokemon
          pokemonDetail={item}
          colors={colors}
          navigation={navigation}
        />
      </>
    );
  };

  return (
    <>
      <FlatList
        data={pokemonDetail}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonLeft}>
          <Button title="<" color={colors.text} onPress={decrease} />
        </View>
        <Text style={{color: colors.text}}>{offSet.numPage}</Text>
        <View style={styles.buttonRight}>
          <Button title=">" color={colors.text} onPress={increase} />
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

export default GetPokemon;
