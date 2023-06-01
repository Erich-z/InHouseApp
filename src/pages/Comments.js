import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comment = ({ author, message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{author}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
  },
});

export default Comment;
