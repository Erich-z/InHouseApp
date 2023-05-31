import Carousel from 'react-native-snap-carousel';
import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Image, SafeAreaView, Dimensions, TextInput,TouchableOpacity } from "react-native";
import { FlatList } from 'react-native';
import { Alert, Card, Input } from 'native-base';
// const slideWidth = 280;
const horizontalMargin = 30;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth - horizontalMargin * 2;
import { Pagination } from 'react-native-snap-carousel';
import * as Icon from "react-native-feather";

import { useEffect } from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler';
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    width: itemWidth,
    height: 250,
    borderRadius: 20,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000'

  },
  heartIconContainer: {
    position: 'absolute',
    top:5,
    right: 20,
    zIndex:1
  },

})


const ImageF = (item) => {

  return (
    <Image

      source={{ uri: item.item }}
      style={styles.image}
    />
  )
}

const Cards = ({ item, index }) => {

  const itemIndex = item.imgUrl.length

  const [color, setColor] = useState('black');
  const [dot, setDot] = useState(0)
  const handleDotPressIncrement = (index) => {
      setDot(index)
  }
  const handleDotPressDecrement = () => {
    setDot(dot - 1)
}
  //  array[0] = 0, array[1] = 2
  const handlePress = () => {
    if (color === 'black') {
      setColor('#1e90ff');
    } else {
      setColor('black');
    }
  };

  return (

    <View style={styles.container} key={index}>
      <View style={styles.heartIconContainer} >
        <TouchableOpacity style={styles.heartIconContainer} onPress={() => handlePress(index)}>
          <Icon.Heart width={30} height={30} fill={color} color={color} />
        </TouchableOpacity>
      </View>
      <Carousel
        layout={"default"}
       /*  firstItem={item.length} */
        loop={false}
        enableSnap={true}          
        /* horizontal={true}
        useScrollView={true}
        initialScrollIndex={item.imgUrl.length} */
        /* getItemLayout={(data, index) => (
          {length: width, offset: width * index, index}
)} */
       /* loopClonesPerSide={item.imgUrl.length}*/
        data={item.imgUrl}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        itemHeight={100}
        /* renderItem={ImageF} */
        inactiveSlideOpacity={0}
        inactiveSlideScale={1}
        onSnapToItem={handleDotPressIncrement}
        onStar
     
        renderItem={({ item, index }) => { 
          console.log(item);
          return (
         
          <Image key={index}  style={styles.image} source={{ uri: item }} />
        )}}
        autoplay={false}


         />
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 70,
          left: 0,
        }}
      >
        <Pagination
          dotsLength={item.imgUrl.length}
          loop={false}          
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8, backgroundColor: '#fff'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}    
          onSnapToItem={handleDotPressIncrement}
          activeDotIndex={dot} />
      </View>
      <View style={{ marginHorizontal: horizontalMargin, marginBottom: 15 }}>
        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
          <Text style={styles.title}>{item.title}</Text>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon.Star width={20} height={20} fill={'#000'} color={'#000'} />
              <Text>{item.rate}</Text>
            </View>            
        </View>
        <Text>{item.body}</Text>
        <Text><Text>R$</Text>{item.price} </Text>
      </View>

    </View>
  );
}


const TabHomeScreen = () => {

  // const [activeTab, setActiveTab] = useState<any>([])

  const data = [
    {
      title: "Presidente Prudente",
      body: "Avenida vai pa puta que pariu.",
      price: 250.25,
      imgUrl: ["https://picsum.photos/id/11/200/300", "https://picsum.photos/id/10/200/300", "https://picsum.photos/id/10/200/300"],
      rate:4.3,
      fav:true,
      id: '1'
    },
    {
      title: "Presidente Prudente",
      body: "Avenida vai pa puta que pariu.",
      imgUrl: ["https://picsum.photos/id/11/200/300", "https://picsum.photos/id/11/200/300", "https://picsum.photos/id/10/200/300", 'https://picsum.photos/id/10/200/300'],
      rate:3.5,
      price: 250.25,
      fav:false,
      id: '2'
    },
    {
      title: "Presidente Prudente",
      body: "Avenida vai pa puta que pariu.",
      imgUrl: ["https://picsum.photos/id/11/200/300", "https://picsum.photos/id/10/200/300", 'https://picsum.photos/id/10/200/300'],
      price: 250.25,
      rate:5,
      fav:true,
      id: '3'
    }, 
  ];
  // const array:any = []
  // updateActiveTab(array)


  

  return (

    <SafeAreaView style={{ flex: 1, paddingTop: 0, backgroundColor:'#fff' }}>

      <View style={{justifyContent:'flex-end', flexDirection:'row',marginTop:10, marginHorizontal:horizontalMargin}}>
        <TouchableOpacity style={{ backgroundColor: '#1e90ff', width:100, padding:8, borderRadius: 10}}>
          <Text style={{textAlign:'center', color:'#fff', fontWeight:'700'}}>Anúncie</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            marginVertical: 10,
            width: itemWidth,

            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#d3d3d3',
            borderRadius: 30,

            paddingHorizontal: 20,
          }}>
          <Icon.Search stroke={'#000'} width={24} height={24} />

          <TextInput
            style={{ flex: 1, height: 50 }}
            placeholderTextColor="#000"
            placeholder="Pesquisar..."
          />
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (<Cards item={item} index={index} />)
          }}
          style={{ flex: 1 }}
          keyExtractor={item => item.id}
        >

        </FlatList>

      </View>
    </SafeAreaView>
  )

}



export default TabHomeScreen;

