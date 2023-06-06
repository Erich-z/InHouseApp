import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native/';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as Icon from 'react-native-feather';
import {Button, Center} from 'native-base';
import Comment from './Comments';
import Modal from 'react-native-modal';
const {width} = Dimensions.get('window');

const IMAGES = {
  image1: require('../img/photoHouse/1.jpeg'),
  image2: require('../img/photoHouse/2.jpeg'),
  image3: require('../img/photoHouse/3.jpeg'),
  image4: require('../img/photoHouse/4.jpeg'),
};

function App() {
  const [images, setImages] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
    {id: '4', image: IMAGES.image4},
  ]);

  const [indexSelected, setIndexSelected] = useState(0);
  const carouselRef = useRef();
  const flatListRef = useRef();

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
            data={images}
            sliderWidth={width}
            itemWidth={width}
            loop={true}
            autoplay={true}
            autoplayInterval={3000}
            renderItem={({item, index}) => (
              <Image
                key={index}
                style={{width: '100%', height: '100%'}}
                source={item.image}
              />
            )}
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
        <Text style={{color: '#000', fontSize: 15}}>Presidente Prudente</Text>
        <Text style={{color: '#000', fontSize: 15}}>
          Casa para passar o final de semana
        </Text>
        <Text style={{color: '#000', fontSize: 15}}>
          Av. Manoel Goulart - 700
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
          200 / Diaria
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
        <Text style={{color: '#000', fontSize: 15}}>Descrição:</Text>
        <Text style={{color: '#000', fontSize: 15, paddingTop: 5}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          position: 'absolute',
          height: '22%',
          marginTop: 465,
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
          marginTop: 465,
          paddingRight: 13,
        }}>
        <Text style={{color: '#000', fontSize: 15, paddingTop: 5}}>
          15 comentários
        </Text>
      </View>

    <View style={{ flex: 1, padding: 11, marginTop: 370, }}>
     <ScrollView horizontal={true}>
        <Comment author="John Doe" message="This is a great article!" />
        <Comment author="Jane Smith" message="I enjoyed reading it." />
        <Comment author="Bob Johnson" message="Keep up the good work!" />
      </ScrollView>
    </View>
      
    </SafeAreaView>
  );
}



export default App;
