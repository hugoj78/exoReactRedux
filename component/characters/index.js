import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import axios from 'axios';

import {publicKey, timeStamp, hash} from '../../config/api';
import Header from '../header';

const Character = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState([]);
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

  const getPokemonDetail = (item) => {
    axios({
      method: 'get',
      url: item.url,
    })
      .then((data) => {
        if (data) {
          pokemonDetail.push(data.data);
          setPokemonDetail(pokemonDetail);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const requiredPokemonByName = (name) => {
    return pokemonDetail.find((data) => data.name === name);
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
        if (res) {
          setPokemon(res.data.results);
          setTotal(res.data.count);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [offSet]);

  useEffect(() => {
    pokemon.map((item) => {
      getPokemonDetail(item);
    });
  });

  const renderItem = ({key, item}) => {
    return (
      <>
        <View style={styles.container} key={key}>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={{
                uri: requiredPokemonByName(item.name).sprites.front_default,
              }}
              style={styles.ImageIconStyle}
            />
            <Text style={styles.title}> {item.name} </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <>
      {/* <Header /> */}
      <FlatList data={pokemon} renderItem={renderItem} />
      {/* {console.log(pokemonDetail)} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    bottom: 60,
    left: 50,
  },
  ImageIconStyle: {
    width: 100,
    height: 100,
    right: 50,
    // resizeMode: 'stretch',
  },
});

export default Character;
