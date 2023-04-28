import React from 'react';
import {Text, View, ScrollView,SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from '../css/style';



const images = [
  require('../img/Image1.jpg'),
  require('../img/Image1.jpg'),
  require('../img/Image1.jpg'),
  require('../img/Image1.jpg'),
];

const TabHomeScreen = () => {
    const renderItem = ({item, index}) => {
        return (
          <View style={styles.slide}>
            <Image source={item} style={styles.image} />
          </View>
        );
      };
    
      return (
        <Carousel
          layout="default"
          data={images}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 60}
          loop={true}
        />
      );
};

export default TabHomeScreen;
