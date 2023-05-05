import React, { useRef, useState } from "react";
import { SafeAreaView, Text, View, Dimensions, Image, FlatList, TouchableOpacity } from "react-native/";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import * as Icon from "react-native-feather";
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
      offset: indexSelected,
      animated: true, 
    })
  }

  function onTouchThumbnail(touched) {
    if(touched === indexSelected) return;
    carouselRef?.current?.snapToItem(touched);
  }

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF', alignItems: 'center'}}>
      <View style={{flex: 1, }}>
        <View style={{
            height: 200,
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
            <View style={{position: 'absolute', zIndex: 10, marginLeft: 130, marginTop: 150}}>
                <Pagination 
                inactiveDotColor="gray"
                dotColor={'#3f9ad5'}
                dotsLength={images.length}
                animatedDuration={150}
                inactiveDotScale={1}
                activeDotIndex={indexSelected}
                />
            </View>
            <View style={{width: '100%',  position: 'absolute', alignItems: 'flex-end', marginTop: 22, paddingRight: 26}}>
              <Icon.Heart stroke={'#3f9ad5'} width={24} height={24} />
            </View>
        </View>
      </View>
      <View style={{width: '100%', position: 'absolute', height: '5%', alignItems: 'flex-end', marginTop: 210, paddingRight: 13 }}>
          <Text style={{color: '#000', fontSize: 15}}><Icon.Star stroke={'#3f9ad5'} width={24} height={24} />4.5</Text>
      </View>
      
      <View style={{width: '100%', position: 'absolute', height: '20%', marginTop: 210, paddingLeft: 7, borderWidth: 2, borderColor: '#000'}}>
          <Text style={{color: '#000', fontSize: 15}}>Presidente Prudente</Text>
          <Text style={{color: '#000', fontSize: 15}}>Casa para passar o final de semana</Text>
          <Text style={{color: '#000', fontSize: 15}}>Av. Manoel Goulart - 700</Text>
          <Text style={{ height:40, color: '#000', fontSize: 15, borderWidth: 2, justifyContent:'center', textAlignVertical:'center'}}><Icon.DollarSign stroke={'#000'} width={20} height={20} />200</Text>          
      </View>       
    </SafeAreaView>
  )
}

export default App;

