import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Button,
  Text,
  Alert,
  View,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

import ShowAllCharacterDetail from '../showAllDetail';

const ShowAllCharacter = ({pokemon, offSet, setOffSet, limit, total}) => {
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    // console.log(pokemon);
    getPokemonDetail(pokemon.pokemon);
    // console.log(pokemonDetail);
  }, [pokemon]);

  const getPokemonDetail = (listPokemon) => {
    listPokemon.map((item) => {
      axios({
        method: 'get',
        url: item.url,
      })
        .then((data) => {
          setPokemonDetail([...pokemonDetail, data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

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

  const renderItem = ({item}) => {
    return (
      <>
        <ShowAllCharacterDetail pokemonDetail={item} />
      </>
    );
  };

  return (
    <>
      <FlatList
        data={pokemonDetail}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
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

export default ShowAllCharacter;
