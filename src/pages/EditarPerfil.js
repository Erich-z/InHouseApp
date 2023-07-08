import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import style from '../css/style';
import * as Icon from 'react-native-feather';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import { updateUsuarioRequest } from '../store/modules/usuario/actions';
import {useDispatch, useSelector} from 'react-redux';


function EditarPerfil({navigation}) {
  const dispatch = useDispatch();
  const usuario = useSelector(({usuario}) => usuario);
  console.log(usuario);
  const [usuarioTeste, setusuarioTeste] = useState({
    usuarioNome: usuario?.usuario.usuarioNome,
  });

  const [dados, setDados] = useState({usuarioSenha: '', usuarioEmail: ''});
  const handleChange = (text, nomeInput) => {
    setDados({...dados,[nomeInput]: text});
  }
  console.log(dados)
  
  console.log(usuarioTeste);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const [image, setImage] = useState(require('../img/default.jpg'));

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0.7,
    }).then(newImage => {
      setImage({uri: newImage.path});
    });
  };

  return (
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
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={image} 
            style={{
              width: 90,
              height: 90,
              borderRadius: 90 / 2,
              borderWidth: 2,
            }}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={{color: '#000', fontWeight: 'bold'}}>
          {usuarioTeste.usuarioNome}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '60%',
          marginTop: 40,
        }}>
        <TouchableOpacity
          style={{
            width: '70%',
            backgroundColor: '#D9D9D9',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            padding: 5,
            shadowColor: 'black',
          }}
          onPress={toggleModal}>
          <Icon.Eye stroke="#000" width={24} height={24} />
          <Text style={{marginLeft: 10, fontWeight: 'bold', color: '#000'}}>
            Alterar Senha
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '70%',
            backgroundColor: '#D9D9D9',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            padding: 5,
            shadowColor: 'black',
          }}
          onPress={toggleModal2}>
          <Icon.Mail stroke="#000" width={24} height={24} />
          <Text style={{marginLeft: 10, fontWeight: 'bold', color: '#000'}}>
            Alterar Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '70%',
            backgroundColor: '#D9D9D9',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            padding: 5,
            shadowColor: 'black',
          }}>
          <Icon.Lock stroke="#000" width={24} height={24} />
          <Text
            style={{
              marginLeft: 10,
              fontWeight: 'bold',
              color: '#000',
              width: '70%',
            }}>
            Ativar autenticação de dois fatores
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            maxHeight: 200,
          }}>
          <TouchableOpacity
            style={{
              width: 100,
              backgroundColor: '#00A3FF',
              alignItems: 'center',
              padding: 5,
              borderRadius: 10,
            }}>
            <Text style={{color: '#000', fontWeight: 'bold'}}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={isModalVisible2}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffff',
            maxHeight: 300,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000',
              marginBottom: 10,
              fontSize: 15,
            }}>
            Alterar Email
          </Text>
          <TextInput
            style={{
              height: 35,
              borderWidth: 1,
              width: '50%',
              marginBottom: 10,
              color: '#000',
            }}
            placeholderTextColor={'#000'}
            placeholder="Novo Email"
            onChangeText={(text) => handleChange(text,'usuarioEmail')}
          />
          <TextInput
            style={{height: 35, borderWidth: 1, width: '50%', marginBottom: 10}}
            placeholderTextColor={'#000'}
            placeholder="Confirmar Email"
          />

          <TouchableHighlight
            onPress={()=>{
              toggleModal2()
              usuario.usuario.usuarioEmail = dados.usuarioEmail
              dispatch(updateUsuarioRequest(usuario.usuario.id, usuario.usuario))
             }
            }
            style={{
              borderRadius: 10,
              backgroundColor: '#00A3FF',
              width: 100,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{padding: 10, fontWeight: 'bold', color: '#000'}}>
              Salvar
            </Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <Modal isVisible={isModalVisible}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffff',
            maxHeight: 300,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#000',
              marginBottom: 10,
              fontSize: 15,
            }}>
            Alterar Senha
          </Text>
          <TextInput
            style={{
              height: 35,
              borderWidth: 1,
              width: '50%',
              marginBottom: 10,
              color: '#000',
            }}
            placeholderTextColor={'#000'}
            placeholder="Nova senha"
            onChangeText={(text) => handleChange(text,'usuarioSenha')}
          />
          <TextInput
            style={{height: 35, borderWidth: 1, width: '50%', marginBottom: 10}}
            placeholderTextColor={'#000'}
            placeholder="Confirmar Senha"
          />

          <TouchableHighlight
            onPress={()=>{
              toggleModal();
              usuario.usuario.usuarioSenha = dados.usuarioSenha;
              dispatch(updateUsuarioRequest(usuario.usuario.id, usuario.usuario))
            }
            
            }
            style={{
              borderRadius: 10,
              backgroundColor: '#00A3FF',
              width: 100,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{padding: 10, fontWeight: 'bold', color: '#000'}}>
              Salvar
            </Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
}

export default EditarPerfil;
