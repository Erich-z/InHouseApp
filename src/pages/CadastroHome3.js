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
import { useDispatch, useSelector } from 'react-redux';
function PaginaInicial({navigation}) {
  const route = useRoute();

  const data = route.params.dados
  const usuario = useSelector(({usuario}) => usuario.usuario);
  console.log(usuario)
  const [novoAnuncio] = useState({
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
    usuarioTelefone: data.usuarioTelefone,

  
  });

 

  const [anuncioCadastro, setNovoAnuncio] = useState({
    imoveisDiaria: data.imoveisDiaria,
    imoveisDescricao: data.imoveisDescricao,
    imoveisCep: data.imoveisCep,
    imoveisRua: data.imoveisRua,
    imoveisBairro: data.imoveisBairro,
    imoveisCidade: data.imoveisCidade,
    imoveisNumero: data.imoveisNumero,
    imoveisQuarto: data.imoveisQuarto,
    imoveisBanheiro: data.imoveisBanheiro,
    imoveisCozinha: data.imoveisCozinha,
    imoveisDiferencial: data.imoveisDiferencial,
    AnuncioFavorito: '',
    mednota: '',
    usuarioId: usuario.id,
    images:[]
  });


  
  function handleChange(text, nomeInput) {
    setNovoAnuncio({...anuncioCadastro, [nomeInput]:text});

    console.log(anuncioCadastro)
    // console.log(anuncioCadastro)
  }

  const dispatch = useDispatch()
  const handleCadastroUpdate = () => {
    dispatch(criarAnuncioRequest(anuncioCadastro));
    

   
  }
  // console.log(novoAnuncio)
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
          <TouchableOpacity style={{width:50,backgroundColor:'#00B0FF', borderRadius:100,}} onPress={() =>navigation.push('Cadastro4', {dados:anuncioCadastro})}>
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
