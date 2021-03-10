import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CharacterShowDetail = ({pokemon}) => {
  return (
    <>
      <View style={styles.container}>
        {pokemon ? (
          <>
            <Image
              source={{
                uri: pokemon.sprites.front_default,
              }}
              style={styles.ImageIconStyle}
            />
            <Image
              source={{
                uri: pokemon.sprites.back_default,
              }}
              style={styles.ImageIconStyle}
            />
            <Text style={styles.title}> Name : {pokemon.name} </Text>
            <Text style={styles.title}> Height : {pokemon.height} </Text>
            <Text style={styles.title}> Weight : {pokemon.weight} </Text>
            <Text style={styles.title}>
              Type :{' '}
              {pokemon.types.map(
                (pokemonType) => '- ' + pokemonType.type.name + '\n',
              )}
            </Text>
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
  title: {
    textAlign: 'center',
  },
  ImageIconStyle: {
    width: 200,
    height: 200,
  },
});

export default CharacterShowDetail;
