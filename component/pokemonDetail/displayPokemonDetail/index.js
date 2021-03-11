import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, Text, View, Image, Switch} from 'react-native';

import {useDispatch} from 'react-redux';
import {addFavoris, deleteFavoris, isFavoris} from '../../../actions/favoris';

const DisplayPokemonDetail = ({pokemon, colors}) => {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState();

  const toggleSwitch = () =>
    isEnabled && pokemon ? deleteFav(pokemon?.id) : addFav(pokemon?.id);

  const deleteFav = (id) => {
    dispatch(deleteFavoris(id));
    setIsEnabled(false);
  };

  const addFav = (id) => {
    dispatch(addFavoris(id));
    setIsEnabled(true);
  };

  useEffect(() => {
    setIsEnabled(dispatch(isFavoris(pokemon?.id)));
  }, [dispatch, pokemon]);

  return (
    <>
      <View style={styles.container}>
        {pokemon ? (
          <>
            <Image
              source={{
                uri: pokemon.sprites.other['official-artwork'].front_default,
              }}
              style={styles.ImageIconStyle}
            />
            <Text style={[styles.bigTitle, {color: colors.text}]}>
              {pokemon.name}
            </Text>
            <View>
              <Text style={[styles.title, {color: colors.text}]}>
                Height : {pokemon.height}
              </Text>
              <Text style={[styles.title, {color: colors.text}]}>
                Weight : {pokemon.weight}
              </Text>
              <Text style={[styles.title, {color: colors.text}]}>
                Type :{''}
                {pokemon.types.map((pokemonType) => {
                  if (pokemon.types.indexOf(pokemonType) === 1) {
                    return `            - ${pokemonType.type.name}\n`;
                  } else {
                    return ` - ${pokemonType.type.name}\n`;
                  }
                })}
              </Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: '#53B7D2'}}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </>
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'baseline',
  },
  bigTitle: {
    fontSize: 40,
  },
  title: {
    fontSize: 20,
  },
  ImageIconStyle: {
    width: 300,
    height: 300,
  },
});

export default DisplayPokemonDetail;
