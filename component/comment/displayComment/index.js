import React from 'react';
import {StyleSheet, Text} from 'react-native';

const DisplayComment = ({comment, colors}) => {
  return (
    <>
      <Text style={[styles.userTitle, {color: colors.text}]}>
        {comment.idUser}
      </Text>
      <Text style={{color: colors.text}}>{comment.comment}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  userTitle: {
    fontSize: 20,
    paddingTop: 20,
  },
  commentTitle: {},
});

export default DisplayComment;
