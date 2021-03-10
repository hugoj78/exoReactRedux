import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../component/login';
import Character from '../../component/characters';
import CharacterDetail from '../../component/characterDetail';
import Profil from '../../component/profil';

import MMKVStorage from 'react-native-mmkv-storage';

import PrivateRoute from '../../utils/route';

const Route = () => {
  const Stack = createStackNavigator();
  const [isToken, setIsToken] = useState('');
  const MMKV = new MMKVStorage.Loader().initialize();

  return (
    <>
      <PrivateRoute
        NavigationContainer={NavigationContainer}
        Stack={Stack}
        isToken={isToken}
        setIsToken={setIsToken}
        MMKV={MMKV}
        Login={Login}
        Character={Character}
        CharacterDetail={CharacterDetail}
        Profil={Profil}
      />
    </>
  );
};

export default Route;
