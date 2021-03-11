import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import DisplayPokemonDetail from './displayPokemonDetail';

const PokemonDetail = ({setIsToken, route}) => {
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
      <DisplayPokemonDetail pokemon={pokemon} />
    </>
  );
};

export default PokemonDetail;
