import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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
    borderWidth: 1,
    borderColor: '#00a3ff', 
    padding: 10,
    marginBottom: 10,
    height: 150,
    marginLeft: 8
  },
  author: {
    fontWeight: 'bold',
    marginBottom: 5,
    width: '80%'
  },
  message: {
    fontSize: 16,
  },
});

export default Comment;
