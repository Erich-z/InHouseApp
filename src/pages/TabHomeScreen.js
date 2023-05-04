
[
  {

    imgArray:['../img/Image1.jpg', '../img/Image2.jpg', '../img/Image3.jpg'],
    city:'Presidente Prudente',
    address:'AV Tititi',
    price:220

  },
  {

    imgArray:['../img/Image1.jpg', '../img/Image2.jpg', '../img/Image3.jpg'],
    city:'Presidente Prudente',
    address:'AV Tititi',
    price:220

  },
]


import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                                                //  array[0] = 0, array[1] = 2

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image source={item.source} style={styles.image} />
      </View>
    );
  };

  return (
    <ScrollView>
      <View
        style={{
          marginBottom: 60,
          top: 30,
          width: 350,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#d3d3d3',
          borderRadius: 30,
          paddingHorizontal: 10,
        }}>
        <TextInput style={{flex: 1, height: 40}} placeholder="Pesquisar..." />
        <Icon name="search" size={20} color="gray" />
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
          <Text style={[styles.text, {textAlign: 'left'}]}>Av. Titititi</Text>
          <Text style={[styles.text, {textAlign: 'left'}]}>R$200 / noite</Text>
        </View>
        <View style={styles.heartIconContainer}>
          <Icon name="heart" size={25} color="red" />
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
          <Icon name="heart" size={25} color="red" />
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
    width: 350,
    height: 200,
    resizeMode: 'cover',
  },
  carousel: {
    height: 200,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    width: 350,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 40,
    zIndex: 1,
  },
});

export default CarouselScreen;
