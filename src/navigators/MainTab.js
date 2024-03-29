import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import TabFavoritoScreen from '../pages/TabFavoritoScreen';
import TabHomeScreen from '../pages/TabHomeScreen';
import TabUsersScreen from '../pages/TabUserScreen';
import * as Icon from 'react-native-feather';
import Cadastro1 from '../pages/CadastroHome1';
import Cadastro2 from '../pages/CadastroHome2';
import Cadastro3 from '../pages/CadastroHome3';
import Cadastro4 from '../pages/CadastroHome4';
import HouseView from '../pages/HouseView';
import Login from '../pages/LoginScreen';
import CadastroIn from '../pages/CadastroScreen';
import ChatList from '../pages/ChatList';
import EditarPerfil from '../pages/EditarPerfil';
import EditarAnuncio from '../pages/EditarAnuncio';
import EditarAnuncioFoto from '../pages/EditarAnuncioFoto'
import StackNavigatorUser from '../pages/TabUserScreen';
import {CommonActions} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const TabMain = createBottomTabNavigator();
const StackNav = createStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();
  const auth = useSelector(({auth}) => auth);
  console.log(auth);
  return (
    <StackNav.Navigator
      initialRouteName="MainTab"
      screenOptions={() => ({
        headerShown: false,
      })}>
      {auth.isAuthenticated ? (
        <>
          <StackNav.Screen name="MainTab" component={MainTab} />
          <StackNav.Screen name="Cadastro" component={Cadastro1} />
          <StackNav.Screen name="Cadastro2" component={Cadastro2} />
          <StackNav.Screen name="Cadastro3" component={Cadastro3} />
          <StackNav.Screen name="Cadastro4" component={Cadastro4} />
          <StackNav.Screen name="EditarPerfil" component={EditarPerfil} />
          <StackNav.Screen name="HouseView" component={HouseView} />
          <StackNav.Screen name="ChatList" component={ChatList} />
          <StackNav.Screen name="EditarAnuncio" component={EditarAnuncio} />
          <StackNav.Screen name="EditarAnuncioFoto" component={EditarAnuncioFoto} />

        </>
      ) : (
        <>
          <StackNav.Screen name="Login" component={Login} />
          <StackNav.Screen name="CadastroIn" component={CadastroIn} />
        </>
      )}
    </StackNav.Navigator>
  );
};

const MainTab = ({navigation}) => {
  return (
    <TabMain.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let cor = focused ? 'rgb(0, 163, 255)' : '#fff';
          if (route.name === 'Home') {
            return (
              <Icon.Home stroke="#000" fill={cor} width={24} height={24} />
            );
          } else if (route.name === 'Favorito') {
            return (
              <Icon.Heart stroke="#000" fill={cor} width={24} height={24} />
            );
          } else if (route.name === 'Usuario') {
            return (
              <Icon.User stroke="#000" fill={cor} width={24} height={24} />
            );
          }
        },
        tabBarActiveTintColor: 'rgb(0, 163, 255)',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        unmountOnBlur: true,
      })}>
      <TabMain.Screen name="Home" component={TabHomeScreen} />
      <TabMain.Screen name="Favorito" component={TabFavoritoScreen} />
      <TabMain.Screen name="Usuario" component={StackNavigatorUser} />
    </TabMain.Navigator>
  );
};

export default StackNavigator;
