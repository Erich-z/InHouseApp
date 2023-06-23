import react, {useEffect, useState} from 'react';
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
import { useSelector, useDispatch } from "react-redux";
import { criarUsuarioRequest } from '../store/modules/usuario/actions';
import ModalSpinner from './ModalSpinner';

function CadastroInhouse({navigation}) {
  const dispatch = useDispatch();
  const usuario = useSelector(({usuario}) => usuario);
  const [dados, setDados] = useState({usuarioNome: '',usuarioEmail: '', usuarioSenha: ''});
  const handleChange = (text, nomeInput) => {
    setDados({...dados,[nomeInput]: text});
  }
  //acao de fazer login ao clicar no botao entrar
  const handleCadastrar = () => {
    dispatch(criarUsuarioRequest(dados, navigation));
  }
  if(usuario.loading) {
    return <ModalSpinner />
  }
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
          <Input variant="underlined" placeholder="Enter your full name"  onChangeText={(text) => handleChange(text,'usuarioNome')}
        value={dados.usuarioNome}/>
          <Input variant="underlined" placeholder="Enter your email" onChangeText={(text) => handleChange(text,'usuarioEmail')}
        value={dados.usuarioEmail}/>
          <Input variant="underlined" placeholder="Enter your password"  onChangeText={(text) => handleChange(text,'usuarioSenha')}
        value={dados.usuarioSenha}/>
          <Input variant="underlined" placeholder="Confirm password" />

          <Button size="sm" onPress={()=> handleCadastrar()}>Sign Up</Button>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Already have an account?<Text style={{color: '#1e90ff', fontWeight: 'bold',}} onPress={()=>navigation.push('Login')}> Sign In</Text></Text>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}

export default CadastroInhouse;
