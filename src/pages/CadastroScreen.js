import react from 'react';
import {Text, SafeAreaView, TextInput} from 'react-native';
import {
  Button,
  Heading,
  Input,
  Stack,
  VStack,
  Center,
  Image,
} from 'native-base';
import {styles} from '../css/style';
import React from 'react';
import {NativeBaseProvider} from 'native-base';

function cadastroInhouse() {
  return (
    <NativeBaseProvider>
      <Center>
        <Text style={styles.welcomeInHouse}>Welcome to InHouse</Text>
        <Image
          source={require('../img/logoInhouse.png')}
          alt="Alternate Text"
          size={270}
          resizeMode="contain"
        />
      </Center>
      <Center>
        <Stack space={2} w="90%" mx="auto">
          <Input variant="underlined" placeholder="Enter your full name" />
          <Input variant="underlined" placeholder="Enter your email" />
          <Input variant="underlined" placeholder="Enter your password" />
          <Input variant="underlined" placeholder="Confirm password" />

          <Button size="sm">Sign Up</Button>
          <Text>Already have an account?<Text style={{color: '#00ffff', fontWeight: 'bold',}}> Sign In</Text></Text>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default cadastroInhouse;
