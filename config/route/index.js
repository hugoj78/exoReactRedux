import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../component/login';
import Character from '../../component/characters';

import MMKVStorage from 'react-native-mmkv-storage';

const Route = () => {
  const Stack = createStackNavigator();
  const [isToken, setIsToken] = useState('');

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={(props) => (
              <Login isToken={isToken} setIsToken={setIsToken} {...props} />
            )}
          />
          <Stack.Screen
            name="Home"
            component={Character}
            options={{
              title: 'Character',
              headerLeft: '',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default Route;
