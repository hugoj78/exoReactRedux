import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const DisplayFavoris = ({pokemonDetail, colors, navigation}) => {
  const onPress = () => {
    navigation.navigate('Pokemon Detail', {id: pokemonDetail.id});
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
          <Image
            source={{
              uri:
                pokemonDetail.sprites.other['official-artwork'].front_default,
            }}
            style={styles.ImageIconStyle}
          />
          <Text style={[styles.title, {color: colors.text}]}>
            {pokemonDetail.name}
          </Text>
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
    bottom: 70,
    left: 60,
    fontSize: 25,
  },
  ImageIconStyle: {
    width: 120,
    height: 120,
    right: 70,
  },
});

export default DisplayFavoris;
