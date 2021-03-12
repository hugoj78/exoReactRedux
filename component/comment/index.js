import React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addComment} from '../../actions/comment';
import uuid from 'uuid';

import DisplayComment from './displayComment';

const GetComment = ({pokemon, colors}) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const idPokemon = pokemon?.id;
  const idUser = useSelector((state) => state.user.userValue);

  const comments = useSelector((state) => state.comment.listComment).filter(
    (item) => item.idPokemon === idPokemon,
  );

  const addComm = () => {
    const addcom = {
      id: uuid(),
      idPokemon: idPokemon,
      idUser: idUser,
      comment: newComment,
    };
    dispatch(addComment(addcom));
  };

  const renderItem = ({item}) => {
    return (
      <>
        <DisplayComment comment={item} colors={colors} />
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Comment :</Text>
        <TextInput
          style={[styles.input, {color: colors.text}]}
          onChangeText={(username) => setNewComment(username)}
          defaultValue={newComment}
          placeholder="Comment"
        />
        <TouchableOpacity style={styles.button} onPress={addComm}>
          <Text>Add Comment</Text>
        </TouchableOpacity>
        <FlatList
          data={comments}
          contentContainerStyle={{
            paddingBottom: 128,
          }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default GetComment;
