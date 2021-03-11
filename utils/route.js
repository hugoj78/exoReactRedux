import React from 'react';
import {Button} from 'react-native';

const PrivateRoute = ({
  NavigationContainer,
  Stack,
  isToken,
  setIsToken,
  Login,
  Pokemon,
  PokemonDetail,
  Profil,
}) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!isToken ? (
            <Stack.Screen name="Login">
              {(props) => <Login {...props} setIsToken={setIsToken} />}
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
                      color="black"
                    />
                  ),
                })}
              />
              <Stack.Screen
                name="Detail"
                options={{
                  title: 'Pokemon Detail',
                }}>
                {(props) => (
                  <PokemonDetail {...props} setIsToken={setIsToken} />
                )}
              </Stack.Screen>

              <Stack.Screen name="Profil">
                {() => <Profil setIsToken={setIsToken} />}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default PrivateRoute;
