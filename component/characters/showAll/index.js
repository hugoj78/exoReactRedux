import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';

import ShowAllCharacterDetail from '../showAllDetail';

const ShowAllCharacter = (pokemon) => {
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
        keyExtractor={(item) => item.id.toString()}
      />
    </>
  );
};

export default ShowAllCharacter;
