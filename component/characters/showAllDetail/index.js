import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const ShowAllCharacterDetail = (pokemonDetail) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            source={{
              uri: pokemonDetail.pokemonDetail.sprites.front_default,
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={styles.title}> {pokemonDetail.pokemonDetail.name} </Text>
          {/* {console.log(pokemonDetail.pokemonDetail.name)} */}
        </TouchableOpacity>
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
    bottom: 60,
    left: 50,
  },
  ImageIconStyle: {
    width: 100,
    height: 100,
    right: 50,
    // resizeMode: 'stretch',
  },
});

export default ShowAllCharacterDetail;
