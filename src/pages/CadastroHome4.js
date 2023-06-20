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

const App = ({navigation}) => {
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
              style={{width: 150, height: 150, margin: 20, aspectRatio: 1}}
            />
          ))}
        </View>


        <View style={style.prox}>
          <TouchableOpacity
            style={{width: 50, backgroundColor: '#00B0FF', borderRadius: 100}}>
            <Icon.ChevronRight stroke="#000" width={50} height={50} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
