import react from 'react';
import {Text, SafeAreaView, TextInput,View,} from 'react-native';
import {
  Button,
  Heading,
  Input,
  Stack,
  VStack,
  Center,
  Image,
  HStack,
  Flex 
  
} from 'native-base';
import {styles} from '../css/style';
import React from 'react';
import {NativeBaseProvider} from 'native-base';

import * as Icon from 'react-native-feather';

function loginIn() {
  return (
    <NativeBaseProvider>
      <Center>
        <Image
          source={require('../img/logoInhouse.png')}
          alt="Alternate Text"
          size={270}
          resizeMode="contain"
        />
      </Center>
      <Center>
        <Stack space={2} w="90%" mx="auto">
          <Input variant="underlined" placeholder="Enter your email" />
          <Input variant="underlined" placeholder="Enter your password" />
          <View style={{justifyContent: 'center',alignItems:'center', }}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Or</Text>
          </View>
          
          <Button  size="sm" borderRadius='20' h="10">
          <Flex direction="row">
          <Icon.Facebook width={24} height={24} fill="white"/>
          <Text>Continue with Facebook</Text>
          </Flex> 
          </Button>
          <Button size="sm" borderRadius='20' h="10" colorScheme="secondary" marginBottom='5'>Continue with Google</Button>
          <Center>
          <Button size="sm" borderRadius='10' w="80%" h="10">Sign In</Button>
          </Center>
          
          <View style={{alignItems: 'center', margin: 5}}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Don't have an account? <Text style={{color: '#1e90ff', fontWeight: 'bold'}}> Sign Up</Text></Text>
          <Text style={{fontWeight: 'bold', color: '#1e90ff'}}>Forgot Password</Text>
          </View>
          
         
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default loginIn;
