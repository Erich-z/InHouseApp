import React from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Image } from 'react-native';
import Modal from 'react-native-modal';


const Comment = ({ author, message }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../img/logoInhouse.png')} // Replace with the path to your profile image
          style={styles.profileImage}
        />
        <Text style={styles.author}>{author}</Text>
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    borderWidth: 1,
    borderColor: '#00a3ff',
    padding: 10,
    marginBottom: 10,
    marginLeft: 8,
  },
 
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  author: {
    fontWeight: 'bold',
    width: '80%',
  },
  message: {
    fontSize: 16,
    width: 100,
  },
});

export default Comment;
