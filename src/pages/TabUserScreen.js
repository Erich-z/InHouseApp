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
  FlatList,
} from 'react-native';
import * as Icon from 'react-native-feather';
import EditarPerfil from './EditarPerfil';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../store/modules/auth/actions';
import { ScrollView } from 'react-native-gesture-handler';
import {listarAnuncioUsuarioRequest, deleteAnuncioRequest} from '../store/modules/anuncio/actions';


const StackNav = createStackNavigator();

const TabUsersScreen = () => {
  // const data = [
  //   {
  //     id: '1',
  //     local: 'Presidente Epitácio',
  //     endereco: 'Avenida bla bla',
  //   },
  //   {id: '2', local: 'São Paulo', endereco: 'Avenida Paulista'},
  //   {id: '3', local: 'Rio de Janeiro', endereco: 'Avenida Copacabana'},
  //   {id: '4', local: 'Rio de Janeiro', endereco: 'Avenida Copacabana'},
  //   {id: '5', local: 'Rio de Janeiro', endereco: 'Avenida Copacabana'},
  //   {id: '6', local: 'Rio de Janeiro', endereco: 'Avenida Copacabana'},
  // ];

  const ItemList = ({anuncio}) => {
    const navigation = useNavigation();
    return(
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <View style={styles.itemTextContainer}>
          <Text style={styles.localText}>{anuncio.imoveisCidade}</Text>
          <Text style={styles.enderecoText}>{anuncio.imoveisRua}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon.Edit2
            stroke="#000"
            width={24}
            height={24}
            onPress={() => navigation.push('EditarAnuncio')}
          />
          <TouchableHighlight onPress={()=>{handleOpenModal(); setanuncioDelete(anuncio.id)}}>
            <Icon.Trash2 stroke="#000" width={24} height={24} />
          </TouchableHighlight>
        </View>
      </View>
    </TouchableOpacity>)
    
  };

  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  +useEffect(() => {
    setModalVisible(false);
  }, [isFocused]);

const [anuncioDelete, setanuncioDelete] = useState(0)
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const anuncio = useSelector(({anuncio}) =>anuncio)
  const usuario = useSelector(({usuario}) => usuario);
  
  const [usuarioTeste, setusuarioTeste] = useState({
    usuarioNome: usuario?.usuario.usuarioNome,
  });
  
  const [image, setImage] = useState(require('../img/default.jpg'));

  const [anuncioListState, setAnuncioListState] = useState([]);

  const handleLogout = () => {  
    dispatch(logout());
  };

  useEffect(() => {
      dispatch(listarAnuncioUsuarioRequest())
  }, [])

  useEffect(() => {
    setAnuncioListState(anuncio.anuncios);
    handleCloseModal();
  }, [anuncio.anuncios]);
  
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
                onPress={()=>{
                  dispatch(deleteAnuncioRequest(anuncioDelete))
                  
                }}
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
          top:20,
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
                  onPress={() => handleLogout()}
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
        <View style={styles.container}>
        <FlatList 
         data = {anuncioListState}
         renderItem={({ item }) => <ItemList anuncio={item} />}
         keyExtractor={item => item.id}
       />
        </View>
      </View>
      
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
  container: {
    width: '80%',
    marginTop:10,
    marginBottom:25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    height: 60,
    marginTop: 15,
    backgroundColor: 'rgb(0, 163, 255)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  itemContent: {
    
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemTextContainer: {
    width: '80%',
  },
  localText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  enderecoText: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    alignItems: 'center',
  },
});
export default StackNavigatorUser;
