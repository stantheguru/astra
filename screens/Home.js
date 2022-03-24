import { StyleSheet, FlatList, Text, View,  Image, ImageBackground, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'




const Home = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://f5a2-154-123-66-97.ngrok.io/getlist')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  return (
    <ImageBackground 
    source={{uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'}}
    style={{ flex: 1,
      width: null,
      height: null,
      }}
  >
 
 <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Art:</Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.art_name}
              <Image style={{ width: 20, height: 20 }}     source={{uri: "http://f5a2-154-123-66-97.ngrok.io"+item.url}}
 /></Text>
              
              
            )}
          />
        </View>
      )}
    </View>

</ImageBackground >
  )

  
}

export default Home

const styles = StyleSheet.create({})