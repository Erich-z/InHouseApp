import Carousel from 'react-native-snap-carousel';
import {useState} from 'react';
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
  Touchable,
} from 'react-native';
import {FlatList} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// const slideWidth = 280;
const horizontalMargin = 30;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth - horizontalMargin * 2;
import { useDispatch, useSelector } from 'react-redux';
import {Pagination} from 'react-native-snap-carousel';
import * as Icon from 'react-native-feather';

import {useEffect} from 'react';
import { listarAnuncioRequest } from '../store/modules/anuncio/actions';
import { webUrl } from '../../service/web';
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


const TabHomeScreen = ({navigation}) => {
  // const [activeTab, setActiveTab] = useState<any>([])
  const dispatch = useDispatch();
  const anuncio = useSelector(({anuncio}) => anuncio);
  const [anuncioListState, setAnuncioListState] = useState([]);



  useEffect(() => {
    dispatch(listarAnuncioRequest())
  }, []);

  useEffect(() => {
    setAnuncioListState(anuncio.anuncios);
    
  }, [anuncio.anuncios]);

  // console.log(anuncio)
  function ImageF(item) {
    // console.log(item.item)
    // const navigation = useNavigation();
    // console.log(item);
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('HouseView')}>
        <Image source={{ uri: `${webUrl}/${item.item.imoveis_img}`
 }} style={styles.image} />
      </TouchableOpacity>
    );



  }
  
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
      // console.log(item);
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
      // console.log(arr);
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
          <Carousel
            layout={'default'}
            loop={false}

            // ref={ref => console.log(ref)}
            onTouchStart={e => {
              // console.log(index);
              setPosition(index);
            }}
            data={item.anuncios_imagens}
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
            }}
          />
          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 70,
              left: 0,

              // borderTopWidth: 1,
              // borderColor: '#ddd',set
              // backgroundColor: '#fff'
            }}>
            {/* <Pagination
              dotsLength={item.imgUrl.length}
              // containerStyle={{ backgroundColor: 'green' }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: '#fff',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              activeDotIndex={array[position]}
            /> */}
          </View>

          <View style={{marginHorizontal: horizontalMargin, marginBottom: 15}}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={styles.title}>{item.imoveisCidade}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon.Star
                  width={20}
                  height={20}
                  fill={'#000'}
                  color={'#000'}
                />
                <Text>{item.mednota}</Text>
              </View>
            </View>
            <Text>{item.imoveisDescricao}</Text>
            <Text>
              <Text>R$</Text>
              {item.imoveisDiaria}
            </Text>
            {/* <Text>{index}</Text> */}
            {/* <Text>{i}</Text> */}
          </View>
     
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, paddingTop: 0, backgroundColor: '#fff'}}>
      <View
        style={{
          justifyContent: 'flex-end',
          flexDirection: 'row',
          marginTop: 10,
          marginHorizontal: horizontalMargin,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1e90ff',
            width: 100,
            padding: 8,
            borderRadius: 10,
          }}
          onPress={() => navigation.push('Cadastro')}>
          <Text style={{textAlign: 'center', color: '#fff', fontWeight: '700'}}>
            Anúncie
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
            style={{flex: 1, height: 50}}
            placeholderTextColor="#000"
            placeholder="Pesquisar..."
          />
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <FlatList
          data={anuncioListState}

          
          renderItem={({item, index}) => {
            return <Cards item={item} index={index} />;
          }}
          style={{flex: 1}}
          keyExtractor={item => item.id}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default TabHomeScreen;
