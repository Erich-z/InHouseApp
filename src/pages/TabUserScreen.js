import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import * as Icon from 'react-native-feather';
import EditarPerfil from './EditarPerfil';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const StackNav = createStackNavigator();

const TabUsersScreen = () => {
  /* const [editHome, setEditHome] = useState(true);
  const [editarPerfilScreen, setEditarPerfilScreen] = useState(false);

  const handleClickEditPerfil = () => {
    setEditHome(false);
    setEditarPerfilScreen(true);
  } */
  const navigation = useNavigation();
  const usuario = useSelector(({usuario}) => usuario);
  console.log(usuario);
  const [usuarioTeste, setusuarioTeste] = useState({
    usuarioNome: usuario?.usuario.usuarioNome,
  });
  console.log(usuarioTeste);
  const [image, setImage] = useState(require('../img/default.jpg'));
  return (
    <>
      {/* {editarPerfilScreen && <EditarPerfil />}
      {editHome && */}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={image}
            style={{
              width: 90,
              height: 90,
              borderRadius: 90 / 2,
            }}
          />
          <View style={{flexDirection: 'column', marginLeft: 15}}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              {usuarioTeste.usuarioNome}
            </Text>
            <TouchableHighlight onPress={() => navigation.push('EditarPerfil')}>
              <Text>Editar Perfil</Text>
            </TouchableHighlight>
            <View style={{flexDirection: 'row'}}>
              <Icon.Mail
                stroke="#000"
                width={24}
                height={24}
                onPress={() => navigation.push('ChatList')}
              />
              <TouchableHighlight>
                <Icon.LogOut
                  stroke="#000"
                  width={24}
                  height={24}
                  onPress={() => navigation.push('Login')}
                />
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#000',
            fontSize: 18,
            width: '70%',
            marginBottom: 15,
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Deseja anunciar seu imovel totalmente de graça?
        </Text>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: 'rgb(0, 163, 255)',
            padding: 10,
            width: '70%',
            borderRadius: 15,
          }}
          onPress={() => navigation.push('Cadastro')}>
          <Text style={{fontWeight: 'bold', color: '#000', fontSize: 14}}>
            Anunciar Imovel
          </Text>
        </TouchableOpacity>
      </View>
      {/* } */}
    </>
  );
};

const StackNavigatorUser = ({navigation}) => {
  return (
    <StackNav.Navigator
      initialRouteName="Perfil"
      screenOptions={() => ({
        headerShown: false,
      })}>
      <StackNav.Screen name="Perfil" component={TabUsersScreen} />
      <StackNav.Screen name="EditarPerfil" component={EditarPerfil} />
    </StackNav.Navigator>
  );
};

export default StackNavigatorUser;
