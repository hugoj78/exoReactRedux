import React from 'react';
import {Text, Button, Image, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteToken} from '../../actions/token';
import {deleteUser} from '../../actions/user';
import {resetFavoris} from '../../actions/favoris';
import {useTheme} from '@react-navigation/native';

const Profil = ({navigation}) => {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const disconnect = () => {
    dispatch(deleteToken());
    dispatch(deleteUser());
    dispatch(resetFavoris());
  };

  const toFavoris = () => {
    navigation.navigate('Favoris');
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require('./user.png')} style={styles.profilPicture} />
        <View style={styles.title}>
          <Text style={[styles.text, {color: colors.text}]}>
            {useSelector((state) => state.user.userValue)}{' '}
          </Text>
        </View>
        <View style={styles.button}>
          <Button onPress={toFavoris} title="Favoris" />
          <Button onPress={disconnect} title="Disconnect" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilPicture: {
    width: 150,
    height: 350,
    justifyContent: 'center',
    right: 10,
  },
  title: {
    top: 20,
  },
  text: {
    fontSize: 40,
  },
  button: {
    top: 80,
  },
});

export default Profil;
