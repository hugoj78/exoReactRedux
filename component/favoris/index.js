import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {store} from '../../config/store/store';
import {useTheme} from '@react-navigation/native';

import DisplayFavoris from './displayFavoris';

const GetFavoris = ({navigation}) => {
  const [pokFav, setPokFav] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {colors} = useTheme();

  useEffect(() => {
    const favList = store.getState().favoris.listFavoris;

    setTimeout(() => {
      getPokemonDetail(favList);
      setIsLoading(false);
    }, 1000);
  }, [pokFav]);

  const getPokemonDetail = async (fav) => {
    const results = Promise.all(
      fav.map((id) => {
        return axios({
          method: 'get',
          url: `https://pokeapi.co/api/v2/pokemon/${id}`,
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
    setPokFav(result);
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#53B7D2" />
      </View>
    );
  }

  const renderItem = ({item}) => {
    return (
      <>
        <DisplayFavoris
          pokemonDetail={item}
          colors={colors}
          navigation={navigation}
        />
      </>
    );
  };

  return (
    <>
      {pokFav[0] ? (
        <FlatList
          data={pokFav}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <View style={(styles.container, styles.horizontal)}>
          <Text style={[styles.vertical, {color: colors.text}]}>
            Pas de favoris
          </Text>
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
    top: 380,
  },
});

export default GetFavoris;
