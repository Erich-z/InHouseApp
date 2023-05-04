import React, {useState} from 'react';
import {Text, View, Button, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import * as Icon from 'react-native-feather';
import EditarPerfil from './EditarPerfil';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const StackNav = createStackNavigator();


const TabUsersScreen = () => {
  /* const [editHome, setEditHome] = useState(true);
  const [editarPerfilScreen, setEditarPerfilScreen] = useState(false);

  const handleClickEditPerfil = () => {
    setEditHome(false);
    setEditarPerfilScreen(true);
  } */
  const navigation = useNavigation();

  
  return(
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
              source={{
                uri: 'https://pixabay.com/get/g7d489c9dd2bec216a658bc9506900f13a3e4f25b99cfb71db5fab059c1896649fa2f6135729649e1b0fef0904445e507c8451de00f585a4f81ffc239e060e2253c5597da72dc401adf0145256613ee22_1280.jpg',
              }}
              style={{
                width: 90,
                height: 90,
                borderRadius: 90 / 2,
              }}
            />
            <View style={{flexDirection: 'column', marginLeft: 15}}>
              <Text style={{color: '#000', fontWeight: 'bold'}}>
                João Guilherme
              </Text>
              <Button
                onPress={() => navigation.push('EditarPerfil')
              }
                title="Editar Perfil"
                color="#000"
              />
              <View style={{flexDirection: 'row'}}>
                <Icon.Mail stroke="#000" width={24} height={24} />
                <TouchableHighlight>
                <Icon.LogOut stroke="#000" width={24} height={24} onPress={() => navigation.push('Login')}/>
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

const StackNavigatorUser = () => {
  return(
      <StackNav.Navigator
          initialRouteName="Perfil"
          screenOptions={()=>({
              headerShown:false
          })}>
          <StackNav.Screen name="Perfil" component={TabUsersScreen}/>
          <StackNav.Screen name="EditarPerfil" component={EditarPerfil}/>
          
      </StackNav.Navigator>
  )
}

export default StackNavigatorUser;
