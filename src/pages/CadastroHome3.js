import react, {useState} from 'react';
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
import { useRoute } from '@react-navigation/native';
import { criarAnuncioRequest } from '../store/modules/anuncio/actions';
import { useDispatch } from 'react-redux';
function PaginaInicial({navigation}) {
  const route = useRoute();

  const data = route.params.dados

  /*console.log(data)*/
  const [novoAnuncio, setNovoAnuncio] = useState({
    imoveisCep: data.imoveisCep,
    imoveisRua: data.imoveisRua,
    imoveisBairro: data.imoveisBairro,
    imoveisDiaria: data.imoveisDiaria,
    imoveisCidade: data.imoveisCidade,
    imoveisNumero: data.imoveisNumero,
    imoveisDescricao: data.imoveisDescricao,
    imoveisQuarto: data.imoveisQuarto,
    imoveisBanheiro: data.imoveisBanheiro,
    imoveisCozinha: data.imoveisCozinha,
    imoveisDiferencial: data.imoveisDiferencial,
    usuarioNome: data.usuarioNome,
    usuarioCPF: data.usuarioCPF,
    usuarioTelefone: data.usuarioTelefone
    
  });

  const [anuncioCadastro] = useState({
    imoveisDiaria: novoAnuncio.imoveisDiaria,
    imoveisDescricao: novoAnuncio.imoveisDescricao,
    imoveisCep: novoAnuncio.imoveisCep,
    imoveisRua: novoAnuncio.imoveisRua,
    imoveisBairro: novoAnuncio.imoveisBairro,
    imoveisCidade: novoAnuncio.imoveisCidade,
    imoveisNumero: novoAnuncio.imoveisNumero,
    imoveisQuarto: novoAnuncio.imoveisQuarto,
    imoveisBanheiro: novoAnuncio.imoveisBanheiro,
    imoveisCozinha: novoAnuncio.imoveisCozinha,
    imoveisDiferencial: novoAnuncio.imoveisDiferencial,
    AnuncioFavorito: '',
    mednota: ''
  });
  function handleChange(text, nomeInput) {
    setNovoAnuncio({...novoAnuncio, [nomeInput]: text});
  }

  const dispatch = useDispatch()
  const handleCadastroUpdate = () => {
    dispatch(criarAnuncioRequest(anuncioCadastro, navigation));
    console.log('36')
  }
  console.log(novoAnuncio)
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          top: 60,
          margin: 12,
          // borderWidth: 2, //Define a largura da borda
          // borderColor: '#000', // Define a cor da borda
          width: '95%',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image style={{width:206, height:140}} source={require('../img/logoInhouse.png')} />
        </View>
        

        <View
          style={{
            margin: 12,
            width: '95%',
          }}>
          <Text style={style.texto}>Descreva seu imovel</Text>
          <TextInput style={style.input}
            onChangeText={text => handleChange(text, 'imoveisDescricao')}  
          ></TextInput>
          <Text style={style.texto}>Quantos quartos possui?</Text>
          <TextInput style={style.input}
          onChangeText={text => handleChange(text, 'imoveisQuarto')}
          >
          </TextInput>
          <Text style={style.texto}>Quantos banheiro?</Text>
          <TextInput style={style.input}
          onChangeText={text => handleChange(text, 'imoveisBanheiro')}>
          </TextInput>
          <Text style={style.texto}>Quantas cozinha?</Text>
          <TextInput style={style.input}
          onChangeText={text => handleChange(text, 'imoveisCozinha')}>
          </TextInput>
          <Text style={style.texto}>possui algum diferencial?</Text>
          <TextInput style={style.input} 
          onChangeText={text => handleChange(text, 'imoveisDiferencial')}>
          </TextInput>
          
        </View>
        <View style={style.prox}>
          <TouchableOpacity style={{width:50,backgroundColor:'#00B0FF', borderRadius:100,}} onPress={()=>{
            // navigation.push('Cadastro4', {dados:novoAnuncio})}
            handleCadastroUpdate()
            
            }}>
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

export default PaginaInicial;
