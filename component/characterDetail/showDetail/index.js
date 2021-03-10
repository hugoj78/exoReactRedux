import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CharacterShowDetail = ({pokemon}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}> {console.log(pokemon)} </Text>
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

export default CharacterShowDetail;
