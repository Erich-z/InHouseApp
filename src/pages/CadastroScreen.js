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

function CadastroInhouse({navigation}) {
  return (
    <NativeBaseProvider>
      <Center>
        <Text style={{fontWeight: 'bold', color: '#000', marginTop: 50, fontSize: 20}}>Welcome to InHouse</Text>
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

          <Button size="sm" onPress={()=>navigation.push('Login')}>Sign Up</Button>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Already have an account?<Text style={{color: '#1e90ff', fontWeight: 'bold',}} onPress={()=>navigation.push('Login')}> Sign In</Text></Text>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default CadastroInhouse;
