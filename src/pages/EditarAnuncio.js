import React, { useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import style from '../css/style';
import * as Icon from 'react-native-feather';
import {useDispatch, useSelector} from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { updateAnuncioRequest } from '../store/modules/anuncio/actions';


function EditarAnuncio({ navigation }) {
  const dispatch = useDispatch();
  const route = useRoute();
  const [imovelState, setimovelState] = useState(route.params.item);
  function handleChange(text, nomeInput) {
    setimovelState({...imovelState, [nomeInput]: text});
    console.log(imovelState)
    
  }
  
  function handleEdit(){
    dispatch(updateAnuncioRequest(imovelState.id, imovelState))
    navigation.navigate('MainTab')
  }
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={{ width: '95%' }}>
        <View style={{ flexDirection:'column',alignItems:'center', justifyContent: 'center', }}>
          <Image
            style={{ width: 206, height: 140 }}
            source={require('../img/logoInhouse.png')}
          />
          <Text style={style.textoEdit}>Editar anuncio</Text>
        </View>

        <Text style={style.texto}>Preço pela diária</Text>
        <TextInput 
              style={style.input}
              onChangeText={text => handleChange(text, 'imoveisDiaria')}
              >{imovelState.imoveisDiaria}</TextInput>

        <Text style={style.texto}>Informe seu CEP</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisCep')}>{imovelState.imoveisCep}</TextInput>

        <Text style={style.texto}>Rua</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisRua')}>{imovelState.imoveisRua}</TextInput>

        <Text style={style.texto}>Bairro</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisBairro')}>{imovelState.imoveisBairro}</TextInput>

        <Text style={style.texto}>Cidade</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisCidade')}>{imovelState.imoveisCidade}</TextInput>

        <Text style={style.texto}>Número</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisNumero')}>{imovelState.imoveisNumero}</TextInput>

        <Text style={style.texto}>Descreva seu imóvel</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisDescricao')}>{imovelState.imoveisDescricao}</TextInput>

        <Text style={style.texto}>Quantos quartos possui?</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisQuarto')}>{imovelState.imoveisQuarto}</TextInput>

        <Text style={style.texto}>Quantos banheiros?</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisBanheiro')}>{imovelState.imoveisBanheiro}</TextInput>

        <Text style={style.texto}>Quantas cozinhas?</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisCozinha')}>{imovelState.imoveisCozinha}</TextInput>

        <Text style={style.texto}>Possui algum diferencial?</Text>
        <TextInput style={style.input}  onChangeText={text => handleChange(text, 'imoveisDiferencial')}>{imovelState.imoveisDiferencial}</TextInput>

        <View style={style.prox}>
          <TouchableOpacity onPress={handleEdit} style={{ width: 50, backgroundColor: '#00B0FF', borderRadius: 100 }}>
            <Icon.ChevronRight stroke="#000" width={50} height={50} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default EditarAnuncio;
