import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
  Modal,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import * as Icon from 'react-native-feather';
import EditarPerfil from './EditarPerfil';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../store/modules/auth/actions';

const StackNav = createStackNavigator();

const TabUsersScreen = () => {
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  +useEffect(() => {
    setModalVisible(false); // Redefine o estado quando a tela for focada novamente
  }, [isFocused]);

  /* const [editHome, setEditHome] = useState(true);
  const [editarPerfilScreen, setEditarPerfilScreen] = useState(false);

  const handleClickEditPerfil = () => {
    setEditHome(false);
    setEditarPerfilScreen(true);
  } */
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const usuario = useSelector(({usuario}) => usuario);
  console.log(usuario);
  const [usuarioTeste, setusuarioTeste] = useState({
    usuarioNome: usuario?.usuario.usuarioNome,
  });
  console.log(usuarioTeste);
  const [image, setImage] = useState(require('../img/default.jpg'));
  const handleLogout = () => {
    /*ConsomeApi.login(dados)
    .then((token) => {
      //console.log(token);
      storeData('@login_token',token)
    })
    .catch(error => console.log(error));*/
    dispatch(logout());
  }
  return (
    <>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja excluir este anuncio</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                title="Sim"
                onPress={() => navigation.push('')}
                style={styles.Modalbutton}>
                <Text style={{textAlign: 'center', color: '#000'}}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                title="Não"
                onPress={handleCloseModal}
                style={styles.Modalbutton}>
                <Text style={{textAlign: 'center', color: '#000'}}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
                  onPress={() => handleLogout() }
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
        <TouchableOpacity
          style={{
            width: '70%',
            height: 60,
            marginTop: 15,
            backgroundColor: 'rgb(0, 163, 255)',
            borderRadius: 15,
            justifyContent: 'center',
            padding: 5,
          }}>
          <View
            style={{
              marginLeft: 15,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View style={{width: '80%'}}>
              <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
                Presidente epitacio
              </Text>
              <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold'}}>
                Avenida jacinto akinoKhu
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '20%',
                alignItems: 'center',
              }}>
              <Icon.Edit2
                stroke="#000"
                width={24}
                height={24}
                onPress={() => navigation.push('EditarAnuncio')}
              />
              <TouchableHighlight>
                <Icon.Trash2
                  stroke="#000"
                  width={24}
                  height={24}
                  onPress={handleOpenModal}
                />
              </TouchableHighlight>
            </View>
          </View>
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
//STYLE MODAL
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  modalText: {
    color: '#000',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Modalbutton: {
    borderRadius: 10,
    color: '#000',
    justifyContent: 'center',
    width: 60,
    height: 40,
    backgroundColor: 'rgb(0, 163, 255)',
  },
});
export default StackNavigatorUser;
