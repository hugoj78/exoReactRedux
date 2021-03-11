import React from 'react';
import {Button} from 'react-native';
import {useSelector} from 'react-redux';

const PrivateRoute = ({
  NavigationContainer,
  Stack,
  Login,
  Pokemon,
  PokemonDetail,
  Profil,
}) => {
  const tokenState = useSelector((state) => state.token.tokenValue);

  return (
    <>
      <NavigationContainer>
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
                {(props) => <PokemonDetail {...props} />}
              </Stack.Screen>

              <Stack.Screen name="Profil">{() => <Profil />}</Stack.Screen>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default PrivateRoute;
