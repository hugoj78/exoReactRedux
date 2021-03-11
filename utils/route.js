import React from 'react';
import {Button} from 'react-native';
import {useSelector} from 'react-redux';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {DefaultTheme} from '@react-navigation/native';
import {CustomDarkTheme} from '../config/theme/theme';

const PrivateRoute = ({
  NavigationContainer,
  Stack,
  Login,
  Pokemon,
  PokemonDetail,
  Profil,
  Favoris,
}) => {
  const tokenState = useSelector((state) => state.token.tokenValue);
  const scheme = useColorScheme();
  // const CustomDarkTheme = {
  //   dark: true,
  //   colors: {
  //     primary: '#fff',
  //     background: 'black',
  //     card: 'black',
  //     text: '#fff',
  //     border: '#fff',
  //     notification: '#fff',
  //   },
  // };
  console.log(CustomDarkTheme);
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer
          theme={scheme === 'dark' ? CustomDarkTheme : DefaultTheme}>
          <Stack.Navigator>
            {!tokenState ? (
              <Stack.Screen name="Login">
                {(props) => <Login {...props} />}
              </Stack.Screen>
            ) : (
              <>
                <Stack.Screen
                  name="Home"
                  component={Pokemon}
                  options={({navigation}) => ({
                    title: 'Pokemon',
                    headerLeft: '',
                    headerRight: () => (
                      <Button
                        onPress={() => navigation.navigate('Profil')}
                        title="Profil"
                      />
                    ),
                  })}
                />

                <Stack.Screen name="Pokemon Detail" component={PokemonDetail} />

                <Stack.Screen name="Profil" component={Profil} />

                <Stack.Screen name="Favoris" component={Favoris} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </>
  );
};

export default PrivateRoute;
