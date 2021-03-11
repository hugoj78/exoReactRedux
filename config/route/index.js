import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../component/login';
import Pokemon from '../../component/pokemon';
import PokemonDetail from '../../component/pokemonDetail';
import Profil from '../../component/profil';
import Favoris from '../../component/favoris';

import PrivateRoute from '../../utils/route';

const Route = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <PrivateRoute
        NavigationContainer={NavigationContainer}
        Stack={Stack}
        Login={Login}
        Pokemon={Pokemon}
        PokemonDetail={PokemonDetail}
        Profil={Profil}
        Favoris={Favoris}
      />
    </>
  );
};

export default Route;
