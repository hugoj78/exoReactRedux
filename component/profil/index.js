import React from 'react';
import {Text, Button} from 'react-native';

const Profil = ({setIsToken}) => {
  const user = '';
  const disconnect = () => {
    setIsToken('');
  };

  return (
    <>
      <Text>Username : {user} </Text>
      <Button onPress={disconnect} title="Disconnect" />
    </>
  );
};

export default Profil;
