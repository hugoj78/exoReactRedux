import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import GetComment from '../../comment';

import {useDispatch, useSelector} from 'react-redux';
import {addFavoris, deleteFavoris} from '../../../actions/favoris';

const DisplayPokemonDetail = ({pokemon, colors}) => {
  const dispatch = useDispatch();

  const toggleSwitch = () =>
    isEnabled && pokemon ? deleteFav(pokemon?.id) : addFav(pokemon?.id);

  const deleteFav = (id) => {
    dispatch(deleteFavoris(id));
  };

  const addFav = (id) => {
    dispatch(addFavoris(id));
  };

  const isEnabled = useSelector((state) =>
    state.favoris.listFavoris.includes(pokemon?.id),
  );

  const [isShiny, setIsShiny] = useState(false);
  const changeSwitch = () => setIsShiny((previousState) => !previousState);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerView}>
            {pokemon ? (
              <>
                {!isShiny ? (
                  <Image
                    source={{
                      uri:
                        pokemon.sprites.other['official-artwork'].front_default,
                    }}
                    style={styles.ImageIconStyle}
                  />
                ) : (
                  <Image
                    source={{
                      uri: pokemon.sprites.front_shiny,
                    }}
                    style={styles.ImageIconStyle}
                  />
                )}
                <Switch onValueChange={changeSwitch} value={isShiny} />
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
                <GetComment pokemon={pokemon} colors={colors} />
              </>
            ) : (
              <>
                <View>
                  <Text>Probleme de chargement</Text>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  containerView: {
    alignItems: 'center',
    top: 20,
  },
  containerComment: {},
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
