import React, {useState} from 'react';
import {
  View,
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import style from '../css/style';
import * as Icon from 'react-native-feather';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_IMAGE_REQUEST } from '../store/modules/Imagem/actions';
import { criarAnuncioRequest } from '../store/modules/anuncio/actions';
const App = ({navigation}) => {

  const route = useRoute();
  const dispatch = useDispatch()
  const data = route.params.dados
  
  const usuario = useSelector(({usuario}) => usuario.usuario);
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
    imoveis_img:[]
  });

  // function handleChange(text, nomeInput) {
   
  // }

  const [images, setImages] = useState([]);

  const [images64, setImages64] = useState([])
  const MAX_IMAGES = 4;
  const handleSelectImages = async () => {

    

    try {

      // setImages([])
      // setImages64([])
   

      const selectedImages = await ImageCropPicker.openPicker({
        multiple: true,
        mediaType: 'photo',
        includeBase64: true,
        
      }); 

  
      if (selectedImages.length > MAX_IMAGES) {
        alert(`Você só pode selecionar ${MAX_IMAGES} imagens`);
        return;
      }
        // console.log(selectedImages);

        // selectedImages.forEach(image => {
          
        //   setImages({uri:image.path});
        // });
        const imagesMap = selectedImages.map(image => ({uri:image.path}))
        const imagesMap64 = selectedImages.map(image => ( `${image.data}`))
        setImages64({imagesMap64})
        setImages(imagesMap)
        
        
        setNovoAnuncio({...anuncioCadastro,  imoveis_img:imagesMap64})
      

      //   setImages64([...images64, { image: images64 }]);
        
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePressImages =  () => {
    // setNovoAnuncio([...anuncioCadastro, base64Image])

    
    
    console.log(anuncioCadastro)

    dispatch(criarAnuncioRequest(anuncioCadastro));
}

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          top: 60,
          margin: 11,
          // borderWidth: 2, //Define a largura da borda
          // borderColor: '#000', // Define a cor da borda
          width: '95%',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{width: 206, height: 140}}
            source={require('../img/logoInhouse.png')}
          />
        </View>

        <View
          style={{
            backgroundColor: '#00B0FF',
            borderRadius:30,
            
            top: 20,
          }}>
          <TouchableOpacity
            style={{ height: 45,padding:10,}}
            onPress={handleSelectImages}>
            <Text style={{textAlign:'center',color:'#000',fontSize:20,}}>Selecione no maximo 4 imagens</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            top: 20,
          }}>
          {images.map(image => (
            <Image
              key={image.uri}
              source={image}
              style={{width: 120, height: 120, margin: 20, aspectRatio: 1}}
            />
          ))}
        </View>


        <View style={style.prox}>
          <TouchableOpacity
            onPress={handlePressImages}
            style={{width: 50, backgroundColor: '#00B0FF', borderRadius: 100}}>
            <Icon.ChevronRight stroke="#000" width={50} height={50} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
