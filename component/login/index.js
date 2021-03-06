import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import axios from 'axios';
import Header from '../header';

const Login = ({isToken, setIsToken, navigation}) => {
  const [formState, setFormState] = useState({username: '', password: ''});
  const [errorMessage, setErrorMessage] = useState('');

  const onPress = () => {
    if (formState.username.length === 0) {
      setErrorMessage('the field username must be not empty');
      return;
    }
    if (formState.password.length < 5) {
      setErrorMessage('the field password must be more than 5 characters');
      return;
    }

    axios({
      method: 'post',
      url: 'https://easy-login-api.herokuapp.com/users/login',
      data: {
        username: formState.username,
        password: formState.password,
      },
    })
      .then((res) => {
        //MMKV.setStringAsync('token', res.headers['x-access-token']);
        setIsToken(res.headers['x-access-token']);
        // CHANGER DE PAGE
        navigation.push('Home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text>Username :</Text>
      <TextInput
        style={styles.input}
        // onChange={(e) => setFormState({...formState, username: e.target.value})}
        onChangeText={(username) =>
          setFormState({...formState, username: username})
        }
        defaultValue={formState.username}
        placeholder="Username"
      />
      <Text>Password :</Text>
      <TextInput
        style={styles.input}
        autoCompleteType="password"
        secureTextEntry={true}
        onChangeText={(password) =>
          setFormState({...formState, password: password})
        }
        defaultValue={formState.password}
        placeholder="Password"
      />
      <Text>{errorMessage}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
});
export default Login;
