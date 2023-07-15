import react, {useEffect, useState} from 'react';
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
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from '../store/modules/auth/actions';

import * as Icon from 'react-native-feather';

function LoginIn({navigation}) {
  const dispatch = useDispatch();
  //manipular os dados do formulario dos inputs
  const [dados, setDados] = useState({Email: 'pao1@gmail.com', senha: '123456789'});
  const handleChange = (text, nomeInput) => {
    setDados({...dados,[nomeInput]: text});
  }
  //acao de fazer login ao clicar no botao entrar
  const handleLogin = () => {
    /*ConsomeApi.login(dados)
    .then((token) => {
      //console.log(token);
      storeData('@login_token',token)
    })
    .catch(error => console.log(error));*/
    dispatch(loginRequest(dados.Email,dados.senha));
  }
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
          <Input variant="underlined" placeholder="Enter your email" value={dados.Email}
        onChangeText={(text)=> handleChange(text, 'Email')} />
          <Input variant="underlined" placeholder="Enter your password" value={dados.senha}
        onChangeText={(text)=> handleChange(text, 'senha')}/>
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
          <Button size="sm" borderRadius='10' w="80%" h="10"  onPress={()=> handleLogin()}>Sign In</Button>
          </Center>
          
          <View style={{alignItems: 'center', margin: 5}}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Don't have an account? <Text style={{color: '#1e90ff', fontWeight: 'bold'}}  onPress={()=>navigation.push('CadastroIn')}> Sign Up</Text></Text>
          <Text style={{fontWeight: 'bold', color: '#1e90ff'}}>Forgot Password</Text>
          </View>
          
         
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default LoginIn;
