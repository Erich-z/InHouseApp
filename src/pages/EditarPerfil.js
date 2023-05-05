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
import ImageCropPicker from 'react-native-image-crop-picker';

function EditarPerfil({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible2, setModalVisible2] = useState(false);

  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };

  const [isModalVisible3, setModalVisible3] = useState(false);

  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };

  const [images, setImages] = useState([]);
  const MAX_IMAGES = 4;
  const handleSelectImages = async () => {
    try {
      const selectedImages = await ImageCropPicker.openPicker({
        multiple: true,
        mediaType: 'photo',
      });

      if (selectedImages.length > MAX_IMAGES) {
        alert(`Você só pode selecionar ${MAX_IMAGES} imagens`);
        return;
      }

      setImages(selectedImages.map(image => ({uri: image.path})));
    } catch (error) {
      console.log(error);
    }
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
        <TouchableOpacity onPress={toggleModal3}>
          
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
        </TouchableOpacity>
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={{color: '#000', fontWeight: 'bold'}}>
            João Guilherme
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
          <Text style={{fontWeight: 'bold', color: '#000', marginBottom: 10, fontSize: 15}}>Alterar Email</Text>
          <TextInput
           style={{height: 35,  borderWidth: 1, width: '50%', marginBottom: 10, color: '#000'}}
           placeholderTextColor={'#000'}
           placeholder="Nova Email"
          />
          <TextInput
           style={{height: 35,  borderWidth: 1, width: '50%', marginBottom: 10}}
           placeholderTextColor={'#000'}
           placeholder="Confirmar Email"
          />

          <TouchableHighlight
            onPress={toggleModal2}
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
          <Text style={{fontWeight: 'bold', color: '#000', marginBottom: 10, fontSize: 15}}>Alterar Senha</Text>
          <TextInput
           style={{height: 35,  borderWidth: 1, width: '50%', marginBottom: 10, color: '#000'}}
           placeholderTextColor={'#000'}
           placeholder="Nova senha"
          />
          <TextInput
           style={{height: 35,  borderWidth: 1, width: '50%', marginBottom: 10}}
           placeholderTextColor={'#000'}
           placeholder="Confirmar Senha"
          />

          <TouchableHighlight
            onPress={toggleModal}
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
      <Modal isVisible={isModalVisible3}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#ffff',
            maxHeight: 300,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Text style={{fontWeight: 'bold', color: '#000', marginBottom: 10, fontSize: 15}}>Alterar Foto</Text>
          <TouchableHighlight onPress={handleSelectImages}>
            <Text style={{color:'#000'}}>A</Text>
          </TouchableHighlight>
          {images.map(image => (
            <Image
              key={image.uri}
              source={image}
              style={{
                width: 90,
                height: 90,
                borderRadius: 90 / 2,
              }}
            />
          ))}

          <TouchableHighlight
            onPress={toggleModal3}
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
