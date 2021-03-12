import React from 'react';
import {StyleSheet, Text} from 'react-native';

const DisplayComment = ({comment, colors}) => {
  return (
    <>
      <Text>{comment.idUser}</Text>
      <Text>{comment.comment}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default DisplayComment;
