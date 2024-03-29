import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native/';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as Icon from 'react-native-feather';
import {Button, Pressable, NativeBaseProvider, Input} from 'native-base';
import Comment from './Comments';
import Modal from 'react-native-modal';
import {PageScrollView} from 'pagescrollview';
import { useRoute } from '@react-navigation/native';
import { webUrl } from '../../service/web';
const {width} = Dimensions.get('window');

const IMAGES = {
  image1: require('../img/photoHouse/1.jpeg'),
  image2: require('../img/photoHouse/2.jpeg'),
  image3: require('../img/photoHouse/3.jpeg'),
  image4: require('../img/photoHouse/4.jpeg'),
};

function App() {
  const route = useRoute();
  const [imovelState, setimovelState] = useState(route.params.item);
  console.log(imovelState)



  const [images, setImages] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
    {id: '4', image: IMAGES.image4},
  ]);

  const [indexSelected, setIndexSelected] = useState(0);
  const carouselRef = useRef();
  const flatListRef = useRef();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function onSelect(indexSelected) {
    setIndexSelected(indexSelected);
    flatListRef?.current?.scrollToOffset({
      offset: indexSelected,
      animated: true,
    });
  }

  function onTouchThumbnail(touched) {
    if (touched === indexSelected) return;
    carouselRef?.current?.snapToItem(touched);
  }

  return (
    <NativeBaseProvider>
      <PageScrollView>
        <SafeAreaView
          style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
          <View style={{flex: 1}}>
            <View
              style={{
                height: 200,
              }}>
              <Carousel
                onSnapToItem={item => onSelect(item)}
                ref={carouselRef}
                layout="default"
                data={imovelState.anuncios_imagens}
                sliderWidth={width}
                itemWidth={width}
                loop={true}
                autoplay={true}
                autoplayInterval={3000}
                renderItem={({item, index}) => {
                  console.log(`${webUrl}/${item.imoveis_img}`)
                  return (
                  <Image
                    key={index}
                    style={{width: '100%', height: '100%'}}
                    source={{
                      uri: `${webUrl}/${item.imoveis_img}`,
                    }}
                  />
                )}}
              />
              <View
                style={{
                  position: 'absolute',
                  zIndex: 10,
                  marginLeft: 130,
                  marginTop: 150,
                }}>
                <Pagination
                  inactiveDotColor="gray"
                  dotColor={'#3f9ad5'}
                  dotsLength={images.length}
                  animatedDuration={150}
                  inactiveDotScale={1}
                  activeDotIndex={indexSelected}
                />
              </View>
              <View
                style={{
                  width: '100%',
                  position: 'absolute',
                  alignItems: 'flex-end',
                  marginTop: 22,
                  paddingRight: 26,
                }}>
                <Icon.Heart stroke={'#3f9ad5'} width={24} height={24} />
              </View>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              position: 'absolute',
              height: '5%',
              alignItems: 'flex-end',
              marginTop: 211,
              paddingRight: 37,
            }}>
            <Text style={{color: '#000', fontSize: 15}}>
              <Icon.Star stroke={'#3f9ad5'} width={24} height={24} />
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              position: 'absolute',
              height: '5%',
              alignItems: 'flex-end',
              marginTop: 213,
              paddingRight: 13,
            }}>
            <Text style={{color: '#000', fontSize: 15}}>4.5</Text>
          </View>

          <View
            style={{
              width: '100%',
              position: 'absolute',
              height: '16%',
              marginTop: 210,
              paddingLeft: 7,
            }}>
            <Text style={{color: '#000', fontSize: 15}}>
            {imovelState.imoveisCidade}
            </Text>
            <Text style={{color: '#000', fontSize: 15}}>
            {imovelState.imoveisDiferencial}
            </Text>
            <Text style={{color: '#000', fontSize: 15}}>
            {imovelState.imoveisRua}
            </Text>
            <View
              style={{
                width: '10%',
                position: 'absolute',
                height: '20%',
                marginTop: 65,
                paddingLeft: 3,
              }}>
              <Icon.DollarSign stroke={'#000'} width={20} height={20} />
            </View>
            <Text
              style={{
                width: '35%',
                height: 40,
                color: '#000',
                marginTop: 2,
                marginLeft: 15,
                fontSize: 15,
              }}>
              {imovelState.imoveisDiaria}
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              position: 'absolute',
              height: '22%',
              marginTop: 325,
              paddingLeft: 7 /*borderWidth: 2, borderColor: '#8a2be2'*/,
            }}>
            <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold'}}>Descrição:</Text>
            <Text style={{color: '#000', fontSize: 15, paddingTop: 5}}>
            {imovelState.imoveisDescricao}
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              position: 'absolute',
              height: '22%',
              marginTop: 480,
              paddingLeft: 7 /*borderWidth: 2, borderColor: '#1e90ff'*/,
            }}>
            <Text style={{color: '#000', fontSize: 15}}>Comentários</Text>
          </View>
          <View
            style={{
              width: '100%',
              position: 'absolute',
              height: '5%',
              alignItems: 'flex-end',
              marginTop: 480,
              paddingRight: 13,
            }}>
            <Text style={{color: '#000', fontSize: 15, paddingTop: 5}}>
              15 comentários
            </Text>
          </View>

          <View style={{flex: 1, padding: 11, marginTop: 320}}>
            <ScrollView horizontal={true}>
              <Comment
                author="John Doe"
                message="This is a great article! kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
              />

              <Comment author="Jane Smith" message="I enjoyed reading it." />
              <Comment author="Bob Johnson" message="Keep up the good work!" />
            </ScrollView>
          </View>
          <View
            style={{
              width: '100%',
              position: 'absolute',
              height: '5%',
              alignItems: 'flex-end',
              marginTop: 208,
              paddingRight: 80,
            }}>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={{color: '#000', paddingTop: 5}}>
                <Icon.MessageCircle stroke={'#3f9ad5'} width={30} height={30} />
              </Text>
            </TouchableOpacity>
          </View>

          <Modal isVisible={isModalVisible}>
            <View style={{backgroundColor: '#FFF', padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Deixe seu comentário
              </Text>
              <Input
                placeholder="Comentar"
                multiline
                onChangeText={comment => setComment(comment)}
                value={{}}
                style={{marginTop: 10}}
              />
              <Button onPress={() => submitComment()} style={{marginTop: 10}}>
                <Text style={{color: '#FFF'}}>Enviar</Text>
              </Button>
              <Button
                onPress={() => setModalVisible(false)}
                style={{marginTop: 10}}>
                <Text style={{color: '#FFF'}}>Cancelar</Text>
              </Button>
            </View>
          </Modal>
        </SafeAreaView>
      </PageScrollView>
    </NativeBaseProvider>
  );
}

export default App;
