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
            <Text style={styles.title}> {pokemon.name} </Text>
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
    width: 300,
    height: 300,
  },
});

export default CharacterShowDetail;
