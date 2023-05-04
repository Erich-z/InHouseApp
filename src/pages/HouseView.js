import React, { useRef, useState } from "react";
import { SafeAreaView, Text, View, Dimensions, Image, FlatList, TouchableOpacity } from "react-native/";
import Carousel, {Pagination} from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const IMAGES = {
  image1: require('../img/photoHouse/1.jpeg'),
  image2: require('../img/photoHouse/2.jpeg'),
  image3: require('../img/photoHouse/3.jpeg'),
  image4: require('../img/photoHouse/4.jpeg'),
}

function App() {
  const [images, setImages] = useState([
    {id: '1', image: IMAGES.image1},
    {id: '2', image: IMAGES.image2},
    {id: '3', image: IMAGES.image3},
    {id: '4', image: IMAGES.image4},
  ])

  const [indexSelected, setIndexSelected] = useState(0);
  const carouselRef = useRef();
  const flatListRef = useRef();

  function onSelect(indexSelected) {
    setIndexSelected(indexSelected)
    flatListRef?.current?.scrollToOffset({
      offset: indexSelected * 80,
      animated: true, 
    })
  }

  function onTouchThumbnail(touched) {
    if(touched === indexSelected) return;
    carouselRef?.current?.snapToItem(touched);
  }

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
      <View style={{flex: 1, borderWidth: 2}}>
        <View style={{
            borderWidth: 2,
            height: 300,
        }}
        >
            <Carousel 
            onSnapToItem={(item) => onSelect(item)}
            ref={carouselRef}
            layout="default"
            data={images}
            sliderWidth={width}
            itemWidth={width}
            loop={true}
            renderItem={({item, index}) => (
                <Image 
                key={index}
                style={{width: '100%', height: '100%'}}
                source={item.image}
                />
            )}
            />
            <View style={{position: 'absolute', zIndex: 10}}>
                <Pagination 
                inactiveDotColor="gray"
                dotColor={'#3f9ad5'}
                dotsLength={images.length}
                animatedDuration={150}
                inactiveDotScale={1}
                activeDotIndex={indexSelected}
                />
            </View>
        </View>
      </View>
    
      
    </SafeAreaView>
  )
}

export default App;

