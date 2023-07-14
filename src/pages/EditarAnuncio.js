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

function EditarAnuncio({ navigation }) {
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
        <TextInput style={style.input} />

        <Text style={style.texto}>Informe seu CEP</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Rua</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Bairro</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Cidade</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Número</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Descreva seu imóvel</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Quantos quartos possui?</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Quantos banheiros?</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Quantas cozinhas?</Text>
        <TextInput style={style.input} />

        <Text style={style.texto}>Possui algum diferencial?</Text>
        <TextInput style={style.input} />

        <View style={style.prox}>
          <TouchableOpacity onPress={() => navigation.push('EditarAnuncioFoto')} style={{ width: 50, backgroundColor: '#00B0FF', borderRadius: 100 }}>
            <Icon.ChevronRight stroke="#000" width={50} height={50} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default EditarAnuncio;
