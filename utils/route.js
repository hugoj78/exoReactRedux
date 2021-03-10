import React from 'react';
import {Button} from 'react-native';

const PrivateRoute = ({
  NavigationContainer,
  Stack,
  isToken,
  setIsToken,
  MMKV,
  Login,
  Character,
  CharacterDetail,
  Profil,
  navigation,
}) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {!isToken ? (
            <Stack.Screen
              name="Login"
              component={(props) => (
                <Login
                  {...props}
                  isToken={isToken}
                  setIsToken={setIsToken}
                  MMKV={MMKV}
                />
              )}
            />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Character}
                options={{
                  title: 'Character',
                  headerLeft: '',
                  headerRight: () => (
                    <Button
                      onPress={() => navigation.navigate('Profil')}
                      title="Profil"
                      color="black"
                    />
                  ),
                }}
              />
              <Stack.Screen
                name="Detail"
                component={(props) => (
                  <CharacterDetail
                    setIsToken={setIsToken}
                    MMKV={MMKV}
                    {...props}
                  />
                )}
                options={{
                  title: 'Character Detail',
                }}
              />

              <Stack.Screen name="Profil" component={Profil} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default PrivateRoute;
