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

function PaginaInicial({navigation}) {
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
          <TextInput style={style.input}></TextInput>
          <Text style={style.texto}>Quantos quartos possui?</Text>
          <TextInput style={style.input}></TextInput>
          <Text style={style.texto}>Quantos banheiro?</Text>
          <TextInput style={style.input}></TextInput>
          <Text style={style.texto}>Quantas cozinha?</Text>
          <TextInput style={style.input}></TextInput>
          <Text style={style.texto}>possui algum diferencial?</Text>
          <TextInput style={style.input}></TextInput>
          
        </View>
        <View style={style.prox}>
          <TouchableOpacity style={{width:50,backgroundColor:'#00B0FF', borderRadius:100,}} onPress={()=>navigation.push('Cadastro4')}>
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
