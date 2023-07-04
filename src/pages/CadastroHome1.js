import react, { useState } from 'react';
import {
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

function Cadastro1({ navigation }) {
  const [novoAnuncio, setNovoAnuncio] = useState({
    imoveisDiaria: "",
    imoveisDescricao: "",
    imoveisCep: "",
    imoveisRua: "",
    imoveisBairro: "",
    imoveisCidade: "",
    imoveisNumero: "",
    imoveisQuarto: "",
    imoveisBanheiro: "",
    imoveisCozinha: "",
    imoveisDiferencial: "",
    AnuncioFavorito: "",
    mednota: ""
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          top: 60,
          margin: 12,
          // borderWidth: 2, //Define a largura da borda
          // borderColor: '#000', // Define a cor da borda
          width: '95%',
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ fontSize: 46, color: '#000', fontWeight: 'bold' }}>Olá, </Text>
          <Text style={{ fontSize: 46, color: '#00B0FF', fontWeight: 'bold' }}>Bem-Vindo</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: '#000', fontSize: 25 }}>
            Para <Text style={{ color: '#00B0FF' }}>cadastrar</Text> seu imovel preencha o formulario.
          </Text>
        </View>

        <View
          style={{
            margin: 12,
            width: '95%',
          }}>
          <Text style={style.texto}>Informe seu nome</Text>
          <TextInput style={style.input}></TextInput>
          <Text style={style.texto}>Informe seu CPF</Text>
          <TextInput style={style.input}></TextInput>
          <Text style={style.texto}>Informe seu telefone</Text>
          <TextInput style={style.input}></TextInput>
          <Text style={style.texto}>Preço pela diaria</Text>
          <TextInput style={style.input}
            value={novoAnuncio.imoveisDiaria}
            onChangeText={(text) => handleChange(text, 'imoveisDiaria')}
          ></TextInput>
        </View>
        <View style={style.prox}>
          <TouchableOpacity style={{ width: 50, backgroundColor: '#00B0FF', borderRadius: 100, }} onPress={() => navigation.push('Cadastro2')}>
            <Icon.ChevronRight
              stroke="#000"
              width={50}
              height={50}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Cadastro1;
