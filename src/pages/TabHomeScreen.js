// [
//   {

//     imgArray:['../img/Image1.jpg', '../img/Image2.jpg', '../img/Image3.jpg'],
//     city:'Presidente Prudente',
//     address:'AV Tititi',
//     price:220

//   },
//   {

//     imgArray:['../img/Image1.jpg', '../img/Image2.jpg', '../img/Image3.jpg'],
//     city:'Presidente Prudente',
//     address:'AV Tititi',
//     price:220

//   },
// ]

import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as Icon from 'react-native-feather';

const images1 = [
  {source: require('../img/Image1.jpg')},
  {source: require('../img/Image2.jpg')},
  {source: require('../img/Image3.jpg')},
  {source: require('../img/Image4.jpg')},
];

const images2 = [
  {source: require('../img/Image2.jpg')},
  {source: require('../img/Image3.jpg')},
  {source: require('../img/Image4.jpg')},
  {source: require('../img/Image1.jpg')},
];

const CarouselScreen = () => {
  const [activeSlide, setActiveSlide] = useState([0, 2]);
  const [color, setColor] = useState('black');
  //  array[0] = 0, array[1] = 2
  const handlePress = () => {
    if (color === 'black') {
      setColor('#1e90ff');
    } else {
      setColor('black');
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.source} style={styles.image} />
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            marginBottom: 60,
            top: 30,
            width: 370,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#d3d3d3',
            borderRadius: 30,
            paddingHorizontal: 10,
          }}>
          <Icon.Search stroke={'#000'} width={24} height={24} />

          <TextInput
            style={{flex: 1, height: 50}}
            placeholderTextColor="#000"
            placeholder="Pesquisar..."
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.carousel}>
          <Carousel
            layout="default"
            data={images1}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={400}
            loop={true}
            autoplay={false}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
            <Pagination
              dotsLength={images1.length}
              activeDotIndex={activeSlide}
              containerStyle={{paddingVertical: 5}}
              dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
              }}
              inactiveDotStyle={{
                backgroundColor: '#1e90ff',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.text, {textAlign: 'left', fontWeight: 'bold'}]}>
            Presidente Epitácio - SP
          </Text>
          <Icon.Star style={{justifyContent:'flex-end',alignItems:'flex-end'}} size={24} color={'#000'}/>
          <Text style={styles.text}>Av. Titititi</Text>
          <Text style={styles.text}>R$200 / noite</Text>
        </View>
        
        <View style={styles.heartIconContainer}>
          <TouchableOpacity onPress={handlePress}>
            <Icon.Heart width={30} height={30} fill={color} color={color} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.carousel}>
          <Carousel
            layout="default"
            data={images2}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={400}
            loop={true}
            autoplay={false}
            onSnapToItem={index => setActiveSlide(index)}
          />
          <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
            <Pagination
              dotsLength={images2.length}
              activeDotIndex={activeSlide}
              containerStyle={{paddingVertical: 5}}
              dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)',
              }}
              inactiveDotStyle={{
                backgroundColor: '#1e90ff',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={[styles.text, {textAlign: 'left', fontWeight: 'bold'}]}>
            Presidente Epitácio - SP
          </Text>
          <Text style={[styles.text, {textAlign: 'left'}]}>Av. Titititi</Text>
          <Text style={[styles.text, {textAlign: 'left'}]}>R$200 / noite</Text>
        </View>
        <View style={styles.heartIconContainer}>
          <Icon.Heart stroke={'#000'} width={30} height={30} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
    width: 370,
    height: 250,
    resizeMode: 'cover',
  },
  carousel: {
    height: 250,
  },
  textContainer: {
    flex: 1,
    width: 360,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 17,
    color: '#000',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 40,
  },
});

export default CarouselScreen;
