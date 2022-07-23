import React, { useState, useEffect } from 'react';
import {
  Button, View, Text, StyleSheet, Image, Platform, TouchableOpacity, ImageButton, SafeAreaView, Dimensions, Alert, ImageBackground
} from 'react-native';

import { StatusBar } from "expo-status-bar";
import * as Facebook from 'expo-facebook';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-paper';
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'


const HomeScreen = () => {



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

          
          <ImageBackground imageStyle={{ borderTopRightRadius: 20,
    borderTopLeftRadius: 20,}}
            style={styles.bodyImage}
            source={require("../assets/ceo.jpg")} >

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
              }}>2.5 KM</Text>
                </Card>


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
                  }>Dragon Ryder, 77</Text>
                  <Text style={
                    {
                      
                      fontSize: 20,
                      color: "white"
                    }
                  }>Coder, Swimmer, Breathes Fire</Text>
                
                 
                  </View>
                  

          </ImageBackground>

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
              <Ionicons name="person" size={30} color="gray" />
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
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 18

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
    alignItems: 'center',
    height: "100%",
    width: "100%",
    borderRadius: 20

  },
  bodyImage: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.7,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderRadius: 20

  }
})



export default HomeScreen