import Carousel from 'react-native-snap-carousel';
import { useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native';

// const slideWidth = 280;
const horizontalMargin = 30;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth - horizontalMargin * 2;
import {Pagination} from 'react-native-snap-carousel';
import * as Icon from 'react-native-feather';

import {useEffect} from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: itemWidth,
    height: 250,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 5,
    right: 20,
    zIndex: 1,
  },
});

const ImageF = item => {
  // console.log(item.item)
  return <Image source={{uri: item.item}} style={styles.image} />;
};

const TabHomeScreen = ({navigation}) => {
  // const [activeTab, setActiveTab] = useState<any>([])

  const data = [
    {
      title: 'Presidente Prudente',
      body: 'Avenida vai pa puta que pariu.',
      price: 250.25,
      imgUrl: [
        'https://picsum.photos/id/11/200/300',
        'https://picsum.photos/id/10/200/300',
        'https://picsum.photos/id/10/200/300',
      ],
      rate: 4.3,
      fav: true,
      id: '1',
    },
    {
      title: 'Presidente Prudente',
      body: 'Avenida vai pa puta que pariu.',
      imgUrl: [
        'https://picsum.photos/id/11/200/300',
        'https://picsum.photos/id/11/200/300',
        'https://picsum.photos/id/10/200/300',
        'https://picsum.photos/id/10/200/300',
      ],
      rate: 3.5,
      price: 250.25,
      fav: false,
      id: '2',
    },
    {
      title: 'Presidente Prudente',
      body: 'Avenida vai pa puta que pariu.',
      imgUrl: [
        'https://picsum.photos/id/11/200/300',
        'https://picsum.photos/id/10/200/300',
        'https://picsum.photos/id/10/200/300',
      ],
      price: 250.25,
      rate: 5,
      fav: true,
      id: '3',
    },
  ];
  // const array:any = []
  // updateActiveTab(array)

  const Cards = ({item, index}) => {
    const [array, setArray] = useState([]);

    const arr = Array(index + 1).fill(0);
    const [position, setPosition] = useState(0);

    const [color, setColor] = useState('black');
    //  array[0] = 0, array[1] = 2
    const handlePress = index => {
      const favIndex = array;
      console.log(item);
      // setArray([...array, ...favIndex.fav])
      if (color === 'black') {
        setColor('#1e90ff');
      } else {
        setColor('black');
      }
    };
    useEffect(() => {
      // setActiveTab(arr)
      // console.log(arr)
      setArray(arr);
      console.log(arr);
    }, []);

    // console.log(array)
    // updateActiveTab(index)

    // console.log(array)
    return (
      <View style={styles.container} key={index}>
        <View style={styles.heartIconContainer}>
          <TouchableOpacity
            style={styles.heartIconContainer}
            onPress={() => handlePress(index)}>
            <Icon.Heart width={30} height={30} fill={color} color={color} />
          </TouchableOpacity>
        </View>
    )
}



export default TabHomeScreen;