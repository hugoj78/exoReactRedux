import React from 'react';
import {Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteToken} from '../../actions/token';
import {deleteUser} from '../../actions/user';

const Profil = () => {
  const dispatch = useDispatch();
  const disconnect = () => {
    dispatch(deleteToken());
    dispatch(deleteUser());
  };

  return (
    <>
      <Text>Username : {useSelector((state) => state.user.userValue)} </Text>
      <Button onPress={disconnect} title="Disconnect" />
    </>
  );
};

export default Profil;
