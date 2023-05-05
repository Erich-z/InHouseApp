import Carousel from 'react-native-snap-carousel';
import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Image, SafeAreaView, Dimensions } from "react-native";
import { FlatList } from 'react-native';
import { Alert, Card } from 'native-base';
// const slideWidth = 280;
const horizontalMargin = 30;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth - horizontalMargin * 2;
import { Pagination } from 'react-native-snap-carousel';

import {useEffect} from 'react'
const styles = StyleSheet.create({
  container: {
    flex: 1
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

  }

})


const ImageF = (item: any) => {
  // console.log(item.item)
  return (
    <Image

      source={{ uri: item.item }}
      style={styles.image}
    />
  )
}


const TabHomeScreen = () => {
  // const [activeTab, setActiveTab] = useState<any>([])
 
  const data = [
    {
      title: "Presidente Prudente",
      body: "Avenida vai pa puta que pariu.",
      price: 250.25,
      imgUrl: ["https://picsum.photos/id/11/200/300", "https://picsum.photos/id/10/200/300", "https://picsum.photos/id/10/200/300"],
      id: '1'
    },
    {
      title: "Presidente Prudente",
      body: "Avenida vai pa puta que pariu.",
      imgUrl: ["https://picsum.photos/id/11/200/300", "https://picsum.photos/id/11/200/300", "https://picsum.photos/id/10/200/300", 'https://picsum.photos/id/10/200/300'],
      price: 250.25,
      id: '2'
    },
    {
      title: "Presidente Prudente",
      body: "Avenida vai pa puta que pariu.",
      imgUrl: ["https://picsum.photos/id/11/200/300", "https://picsum.photos/id/10/200/300", 'https://picsum.photos/id/10/200/300'],
      price: 250.25,
      id: '3'
    },
  ];
  // const array:any = []
  // updateActiveTab(array)

 
  const Cards = ({ item, index }: any) => {
   
    const [array, setArray] = useState([])
 
    
    const arr:any = Array(index + 1).fill(0)
    const [position, setPosition] = useState(0)
    useEffect(() => {
      // setActiveTab(arr)
      // console.log(arr)
      setArray(arr)
      console.log(arr)
    
    },[])
 
    // console.log(array)
    // updateActiveTab(index)
    
    
   
    // console.log(array)
    return (
      
      <View style={styles.container} key={index}>
        <Carousel
          layout={"default"}

          loop
          // ref={ref => console.log(ref)}
          onTouchStart={(e) => {

            console.log(index)
            setPosition(index)
          }}
          data={item.imgUrl}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          itemHeight={100}
          renderItem={ImageF}
          inactiveSlideOpacity={0}
          inactiveSlideScale={1}
          onSnapToItem={i => {
            const newArr = [...arr];
            newArr[position] = i;
            setArray(newArr);
          
            
          }
            
          } />
        <View
          style={{
            position: 'absolute',
            right: 0,
            bottom: 70,
            left: 0,
            // borderTopWidth: 1,
            // borderColor: '#ddd',set
            // backgroundColor: '#fff'
          }}
        >
          <Pagination
            dotsLength={item.imgUrl.length}
            
            // containerStyle={{ backgroundColor: 'green' }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8, backgroundColor: '#fff'
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            activeDotIndex={array[position]} />
        </View>


        <View style={{ marginHorizontal: horizontalMargin }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.body}</Text>
          <Text><Text>R$</Text>{item.price}</Text>
          <Text>{index}</Text>
          {/* <Text>{i}</Text> */}
        </View>

      </View>
    );
  }
  const updateActiveTab = (array:any) => {
    
    
  }
  return (

    <SafeAreaView style={{ flex: 1, paddingTop: 50 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>

        <FlatList
          data={data}
          renderItem={({ item,index }) =>{

           
            return(
            
              <Cards item={item} index={index}/>
              
            )
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

