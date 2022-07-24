import React, { useState, useEffect } from 'react';
import {
  Button, View, Text,
  StyleSheet, Image, Platform, TouchableOpacity,
  ImageButton, SafeAreaView, Dimensions, Alert, ImageBackground, PanResponder, Animated
} from 'react-native';

import { StatusBar } from "expo-status-bar";
import * as Facebook from 'expo-facebook';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-paper';
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'


const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeableCard = ({ item, removeCard, swipedDirection }) => {
  // let xPosition = new Animated.Value(0);
  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let swipeDirection = '';
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      xPosition.setValue(gestureState.dx);
      if (gestureState.dx > SCREEN_WIDTH - 250) {
        swipeDirection = 'Right';
      } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
        swipeDirection = 'Left';
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 150 &&
        gestureState.dx > -SCREEN_WIDTH + 150
      ) {
        swipedDirection('--');
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
          console.log(swipeDirection)
          console.log(JSON.stringify(item))
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
          console.log(swipeDirection)
          console.log(JSON.stringify(item))

        });
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.cardStyle,
        {

          opacity: cardOpacity,
          transform: [{ translateX: xPosition }, { rotate: rotateCard }],
        },
      ]}>
      <ImageBackground imageStyle={{
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}
        style={styles.bodyImage}
        source={item.image} >

        <Card style={{
          opacity: 0.5,
          marginTop: 10,
          marginRight: 10,
          padding: 10,
          backgroundColor: "black",
          width: 80,
          height: 35,
          alignSelf: "flex-end",
          borderRadius: 20
        }}>
          <Text style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold"
          }}>{item.distance} KM</Text>
        </Card>
        <TouchableOpacity style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: "center",
          marginTop: "50%",
          justifyContent: "center",
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: "green"
        }}>
          <Text style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
           
          }}>You've got a Crush!!</Text>
        </TouchableOpacity>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: "100%",
          padding: 10,
        }}>

          <Text style={
            {
              fontWeight: "bold",
              fontSize: 24,
              color: "white",
              marginBottom: 10
            }
          }>{item.name}, {item.age}</Text>
          <Text style={
            {

              fontSize: 20,
              color: "white"
            }
          }>{item.interests}</Text>


        </View>


      </ImageBackground>

    </Animated.View>
  );
};

const HomeScreen = () => {

  const [noMoreCard, setNoMoreCard] = useState(false);
  const [sampleCardArray, setSampleCardArray] = useState(DEMO_CONTENT);
  const [swipeDirection, setSwipeDirection] = useState('--');

  const removeCard = (id) => {
    // alert(id);
    sampleCardArray.splice(
      sampleCardArray.findIndex((item) => item.id == id),
      1
    );
    setSampleCardArray(sampleCardArray);
    if (sampleCardArray.length == 0) {
      setNoMoreCard(true);
    }
  };

  const lastSwipedDirection = (swipeDirection) => {
    setSwipeDirection(swipeDirection);
  };



  return (

    <View
      style={styles.container}
    >
      <StatusBar style="auto" />
      <View style={styles.inner}>

        <View style={styles.header}>
          <Text style={{
            fontSize: 22,
            fontWeight: "bold"
          }}>Discover</Text>
        </View>

        <View style={{
          width: "5%"
        }}></View>
        <View style={styles.cardNotifications}>
          <Text style={
            {
              fontSize: 18,
              textAlign: "center",
              padding: 10,

            }
          }>
            <SimpleLineIcons size={20} name="bell" color="gray" /></Text>
        </View>
      </View>


      <View style={styles.innerBody}>
        <Card style={styles.cardBody}>


          {sampleCardArray.map((item, key) => (

            <SwipeableCard
              key={key}
              item={item}
              removeCard={() => removeCard(item.id)}
              swipedDirection={lastSwipedDirection}

            />
          ))}
          {noMoreCard ? (
            <Text style={{ fontSize: 22, color: '#000' }}>No Cards Found.</Text>
          ) : null}

          <View style={styles.bottom}>
            <TouchableOpacity style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 25,
              elevation: 20
            }}>
              <Ionicons name="close" size={30} color="red" />
            </TouchableOpacity>
            <View style={{
              width: "12%"
            }}></View>

            <TouchableOpacity>
              <LinearGradient
                colors={['purple', 'purple', 'pink']}

                start={{ x: 0.7, y: 0 }} style={{
                  backgroundColor: "pink",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  elevation: 20
                }}>
                <Ionicons name="heart" size={40} color="white" />
              </LinearGradient>
            </TouchableOpacity>

            <View style={{
              width: "12%"
            }}></View>


            <TouchableOpacity style={{
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
              height: 50,
              width: 50,
              borderRadius: 25,
              elevation: 20
            }}>
              <Ionicons name="image" size={30} color="gray" />
            </TouchableOpacity>
          </View>

        </Card>





      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    justifyContent: "center"
  },
  inner: {

    alignItems: 'center',
    flexDirection: "row",
    width: "90%"

  },

  bottom: {

    flexDirection: "row",


    justifyContent: 'flex-end',
    marginTop: "154%",
    alignSelf: "center",

  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 20,
    alignSelf: "center"

  },
  cardLoc: {
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 10,
    width: "66%",

  },
  cardClose: {
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 25,
    width: 50,
    height: 50,
  },

  cardLike: {
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 35,
    width: 70,
    height: 70,
    backgroundColor: "red",
    display: "flex"

  },
  cardNotifications: {
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 10,
    width: "10%"

  },
  header: {

    justifyContent: "center",
    borderRadius: 10,
    width: "85%",
    alignSelf: "flex-start"

  },
  cardImage: {
    alignItems: 'center',
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,


  },

  circle:
  {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignSelf: "center",
    borderColor: "#adadad",
    borderWidth: 5
  },
  innerBody: {
    alignItems: 'center',
    height: "80%",
    width: "90%",
    marginTop: 10

  },
  cardBody: {

    height: "100%",
    width: "100%",
    borderRadius: 20,




  },
  bodyImage: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.7,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderRadius: 20

  },
  cardStyle: {

    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 20,
    height: "100%",
    width: "100%",
  },
})



export default HomeScreen



const DEMO_CONTENT = [
  {
    id: '1',
    cardTitle: 'Card 1',
    name: 'Janice Mauboy',
    age: 24,
    image: require("../assets/sexy.jpg"),
    distance: 3.1,
    interests: "Dancing, Netflix, Chill"
  },
  {
    id: '2',
    cardTitle: 'Card 2',
    backgroundColor: '#ED2525',
    image: require("../assets/woman.jpg"),
    name: 'Wanjiru Millie',
    age: 24,
    distance: 3.2,
    interests: "Bungee Jumping, Swimming"
  },
  {
    id: '3',
    cardTitle: 'Card 3',
    backgroundColor: '#E7088E',
    image: require("../assets/portrait.jpg"),
    name: 'Mwende Museo',
    age: 28,
    distance: 1.5,
    interests: "Football, Hiking, Chill"
  },
  {
    id: '4',
    cardTitle: 'Card 4',
    backgroundColor: '#00BCD4',
    image: require("../assets/model.jpg"),
    name: 'Janice Mauboy',
    age: 24,
    distance: 3.5,
    interests: "Balet, Netflix, Pelicula"
  },
  {
    id: '5',
    cardTitle: 'Card 5',
    backgroundColor: '#FFFB14',
    image: require("../assets/bikini.jpg"),
    name: 'Monique Michaels',
    age: 21,
    distance: 5.0,
    interests: "Running, Nadar, Chill"
  },
].reverse();