import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {addTodo, editTodo, deleteTodo} from '../../actions/todo';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'uuid';

const TodoList = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [errorEditMessage, setErrorEditMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [inputEditValue, setInputEditValue] = useState('');
  const [modeTodo, setModeTodo] = useState(null);
  const dispatch = useDispatch();

  const onPressAdd = () => {
    if (inputValue.length !== 0) {
      dispatch(addTodo({id: uuid(), value: inputValue}));
      setErrorMessage('');
      setInputValue('');
    } else {
      setErrorMessage('the field must be not empty');
      return;
    }
  };

  const onPressEdit = (id) => {
    if (inputEditValue.length !== 0) {
      dispatch(editTodo({id: id, value: inputEditValue}));
      setErrorEditMessage('');
      setInputEditValue('');
      setModeTodo(null);
    } else {
      setErrorEditMessage('the field must be not empty');
      return;
    }
  };

  const deleteTodoItem = (object) => {
    dispatch(deleteTodo(object));
  };

  const todoList = useSelector((state) => state.todo.list);

  const renderItem = ({item}) => {
    return (
      <>
        {modeTodo !== item.id ? (
          <>
            <Text style={styles.text}>{item.value}</Text>
            <TouchableOpacity
              style={styles.buttonlist}
              onPress={() => setModeTodo(item.id)}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonlist}
              onPress={() => deleteTodoItem(item)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput
              style={styles.inputEdit}
              onChangeText={(v) => setInputEditValue(v)}
              defaultValue={item.value}
            />
            <Text>{errorEditMessage}</Text>
            <TouchableOpacity
              style={styles.buttonlist}
              onPress={() => onPressEdit(item.id)}>
              <Text>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonlist}
              onPress={() => setModeTodo(null)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text>TodoList Biatch hihi</Text>

        <TextInput
          style={styles.input}
          onChangeText={(v) => setInputValue(v)}
          defaultValue={inputValue}
        />
        <Text>{errorMessage}</Text>
        <TouchableOpacity style={styles.button} onPress={onPressAdd}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.hr} />
      <View style={styles.containerList}>
        <FlatList
          data={todoList}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlist}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  containerList: {
    // display: 'flex',
    paddingTop: 30,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  inputEdit: {
    left: 80,
    width: 180,
    top: 60,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    width: 60,
    height: 40,
    marginBottom: 10,
  },
  buttonlist: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    width: 60,
    height: 40,
    marginBottom: 10,
    left: 300,
  },
  text: {
    left: 100,
    width: 180,
    top: 60,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginHorizontal: 20,
  },
  flatlist: {
    paddingBottom: 300,
    width: 300,
  },
});
export default TodoList;
