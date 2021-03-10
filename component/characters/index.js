import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {publicKey, timeStamp, hash} from '../../config/api';
import ShowAllCharacter from './showAll';

const Character = () => {
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
      <ShowAllCharacter
        pokemon={pokemon}
        offSet={offSet}
        setOffSet={setOffSet}
        limit={limit}
        total={total}
        pokemonDetail={pokemonDetail}
        setPokemonDetail={setPokemonDetail}
      />
    </>
  );
};

export default Character;
