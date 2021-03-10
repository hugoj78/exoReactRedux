import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import CharacterShowDetail from './showDetail';

const CharacterDetail = ({setIsToken, MMKV, route}) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://pokeapi.co/api/v2/pokemon/${route.params.id}`,
    })
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [route.params.id]);

  return (
    <>
      <CharacterShowDetail pokemon={pokemon} />
    </>
  );
};

export default CharacterDetail;
