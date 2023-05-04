import React from 'react';
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

function EditarPerfil({navigation}) {
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
        </View>
        
      </View>
      <View style={{width: '100%',  alignItems: 'center', height: '60%', marginTop: 40}}>
              <TouchableOpacity style={{width: '70%', backgroundColor: '#D9D9D9', flexDirection: 'row', alignItems: 'center', marginTop: 10, padding: 5, shadowColor: 'black',}}>
              <Icon.Eye stroke="#000" width={24} height={24} />
              <Text style={{marginLeft: 10, fontWeight: 'bold', color: '#000'}}>Alterar Senha</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '70%', backgroundColor: '#D9D9D9', flexDirection: 'row', alignItems: 'center', marginTop: 10, padding: 5, shadowColor: 'black',}}>
              <Icon.Mail stroke="#000" width={24} height={24} />
              <Text style={{marginLeft: 10, fontWeight: 'bold', color: '#000'}}>Alterar Email</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width: '70%', backgroundColor: '#D9D9D9', flexDirection: 'row', alignItems: 'center', marginTop: 10, padding: 5, shadowColor: 'black',}}>
              <Icon.Lock stroke="#000" width={24} height={24} />
              <Text style={{marginLeft: 10, fontWeight: 'bold', color: '#000' , width:'70%' }}>Ativar autenticação de dois fatores</Text>
              </TouchableOpacity>

              <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', maxHeight: 200}}>
            <TouchableOpacity style={{width: 100, backgroundColor: '#00A3FF', alignItems: 'center', padding: 5, borderRadius: 10,}}>
                <Text style={{ color: '#000', fontWeight: 'bold'}}>Salvar</Text>
              </TouchableOpacity>
            </View>
            </View>
            
    </View>
  );
}

export default EditarPerfil;
