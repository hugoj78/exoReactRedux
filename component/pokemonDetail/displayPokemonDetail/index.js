import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Switch} from 'react-native';

const DisplayPokemonDetail = ({pokemon}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
              Type :{'\n'}
              {pokemon.types.map(
                (pokemonType) => '- ' + pokemonType.type.name + '\n',
              )}
            </Text>
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
  title: {
    textAlign: 'center',
  },
  ImageIconStyle: {
    width: 200,
    height: 200,
  },
});

export default DisplayPokemonDetail;