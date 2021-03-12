import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const DisplayComment = ({comment, colors, dispatch, deleteComment, idUser}) => {
  return (
    <>
      <Text style={[styles.userTitle, {color: colors.text}]}>
        {comment.idUser}
      </Text>
      <Text style={{color: colors.text}}>{comment.comment}</Text>
      {idUser === comment.idUser ? (
        <View style={styles.commentButton}>
          <Button
            onPress={() => dispatch(deleteComment(comment.id))}
            title="Delete"
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  userTitle: {
    fontSize: 20,
    paddingTop: 20,
  },
  commentButton: {
    bottom: 10,
  },
});

export default DisplayComment;
