import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacters} from '../../actions/api';

const Api = () => {
  const dispatch = useDispatch();

  const api = useSelector((state) => state.api.characters);

  const renderItem = ({item}) => {
    return (
      <>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
        <Text>{item.name}</Text>
      </>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text>Apihihihi</Text>
        <FlatList
          data={api}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlist}
          keyExtractor={(item) => item.name.toString()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default Api;
