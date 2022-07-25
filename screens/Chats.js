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

const Chats = () => {

    const [noMoreCard, setNoMoreCard] = useState(false);
    const [swipeDirection, setSwipeDirection] = useState('--');

    const [display, setDisplay] = useState("")



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
                    }}>Chats</Text>
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
               
                    <Card style={{
                        borderRadius:15,
                        marginBottom: 5
                    }}>
                    <TouchableOpacity>
                       
                            <View style={{
                                flexDirection: "row", alignContent: "center", alignItems: "center", width: "100%"
                            }}>
                                <Image style={styles.image
                                } source={require("../assets/model.jpg")} />
                                <View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text style={{
                                            fontWeight: "bold", fontSize: 16, alignSelf: "flex-start", width: "88%", marginBottom: 10,

                                        }}>Michael A Smith</Text>
                                        <Text style={{
                                            color: "green", fontSize: 14, alignSelf: "flex-start", width: "12%", marginBottom: 8,

                                        }}>19:44</Text>

                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text numberOfLines={1} style={{
                                            fontSize: 14, alignSelf: "flex-start", width: "80%",
                                        }}>Michael A Smith Michael A SmithMichael A Smith Michael A Smith Michael A Smith</Text>

                                            <View style={{
                                                width: "20%",
                                                alignItems: "center", 
                                                justifyContent:"flex-end",
                                                alignContent: "flex-end",
                                                alignSelf: "flex-end",
                                            }}>
                                                <Text style={{
                                            color: "white", fontSize: 9,  width: 26, height: 26,  
                                            backgroundColor: "green", borderRadius: 13,paddingTop:"10%",textAlign: "center", 

                                        }}>220</Text>
                                            </View>
                                        

                                    </View>



                                </View>


                            </View>

                       
                    </TouchableOpacity>

                    </Card>

                    <Card style={{
                        borderRadius:15,
                        marginBottom: 5
                    }}>
                    <TouchableOpacity>
                       
                            <View style={{
                                flexDirection: "row", alignContent: "center", alignItems: "center", width: "100%"
                            }}>
                                <Image style={styles.image
                                } source={require("../assets/model.jpg")} />
                                <View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text style={{
                                            fontWeight: "bold", fontSize: 16, alignSelf: "flex-start", width: "88%", marginBottom: 10,

                                        }}>Michael A Smith</Text>
                                        <Text style={{
                                            color: "green", fontSize: 14, alignSelf: "flex-start", width: "12%", marginBottom: 8,

                                        }}>19:44</Text>

                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text numberOfLines={1} style={{
                                            fontSize: 14, alignSelf: "flex-start", width: "80%",
                                        }}>Michael A Smith Michael A SmithMichael A Smith Michael A Smith Michael A Smith</Text>

                                            <View style={{
                                                width: "20%",
                                                alignItems: "center", 
                                                justifyContent:"flex-end",
                                                alignContent: "flex-end",
                                                alignSelf: "flex-end",
                                            }}>
                                                <Text style={{
                                            color: "white", fontSize: 9,  width: 26, height: 26,  
                                            backgroundColor: "green", borderRadius: 13,paddingTop:"10%",textAlign: "center", 

                                        }}>220</Text>
                                            </View>
                                        

                                    </View>



                                </View>


                            </View>

                       
                    </TouchableOpacity>

                    </Card>

                    <Card style={{
                        borderRadius:15,
                        marginBottom: 5
                    }}>
                    <TouchableOpacity>
                       
                            <View style={{
                                flexDirection: "row", alignContent: "center", alignItems: "center", width: "100%"
                            }}>
                                <Image style={styles.image
                                } source={require("../assets/model.jpg")} />
                                <View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text style={{
                                            fontWeight: "bold", fontSize: 16, alignSelf: "flex-start", width: "88%", marginBottom: 10,

                                        }}>Michael A Smith</Text>
                                        <Text style={{
                                            color: "green", fontSize: 14, alignSelf: "flex-start", width: "12%", marginBottom: 8,

                                        }}>19:44</Text>

                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text numberOfLines={1} style={{
                                            fontSize: 14, alignSelf: "flex-start", width: "80%",
                                        }}>Michael A Smith Michael A SmithMichael A Smith Michael A Smith Michael A Smith</Text>

                                            <View style={{
                                                width: "20%",
                                                alignItems: "center", 
                                                justifyContent:"flex-end",
                                                alignContent: "flex-end",
                                                alignSelf: "flex-end",
                                            }}>
                                                <Text style={{
                                            color: "white", fontSize: 9,  width: 26, height: 26,  
                                            backgroundColor: "green", borderRadius: 13,paddingTop:"10%",textAlign: "center", 

                                        }}>220</Text>
                                            </View>
                                        

                                    </View>



                                </View>


                            </View>

                       
                    </TouchableOpacity>

                    </Card>

                    <Card style={{
                        borderRadius:15,
                        marginBottom: 5
                    }}>
                    <TouchableOpacity>
                       
                            <View style={{
                                flexDirection: "row", alignContent: "center", alignItems: "center", width: "100%"
                            }}>
                                <Image style={styles.image
                                } source={require("../assets/model.jpg")} />
                                <View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text style={{
                                            fontWeight: "bold", fontSize: 16, alignSelf: "flex-start", width: "88%", marginBottom: 10,

                                        }}>Michael A Smith</Text>
                                        <Text style={{
                                            color: "green", fontSize: 14, alignSelf: "flex-start", width: "12%", marginBottom: 8,

                                        }}>19:44</Text>

                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text numberOfLines={1} style={{
                                            fontSize: 14, alignSelf: "flex-start", width: "80%",
                                        }}>Michael A Smith Michael A SmithMichael A Smith Michael A Smith Michael A Smith</Text>

                                            <View style={{
                                                width: "20%",
                                                alignItems: "center", 
                                                justifyContent:"flex-end",
                                                alignContent: "flex-end",
                                                alignSelf: "flex-end",
                                            }}>
                                                <Text style={{
                                            color: "white", fontSize: 9,  width: 26, height: 26,  
                                            backgroundColor: "green", borderRadius: 13,paddingTop:"10%",textAlign: "center", 

                                        }}>220</Text>
                                            </View>
                                        

                                    </View>



                                </View>


                            </View>

                       
                    </TouchableOpacity>

                    </Card>
                    <Card style={{
                        borderRadius:15,
                        marginBottom: 5
                    }}>
                    <TouchableOpacity>
                       
                            <View style={{
                                flexDirection: "row", alignContent: "center", alignItems: "center", width: "100%"
                            }}>
                                <Image style={styles.image
                                } source={require("../assets/model.jpg")} />
                                <View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text style={{
                                            fontWeight: "bold", fontSize: 16, alignSelf: "flex-start", width: "88%", marginBottom: 10,

                                        }}>Michael A Smith</Text>
                                        <Text style={{
                                            color: "green", fontSize: 14, alignSelf: "flex-start", width: "12%", marginBottom: 8,

                                        }}>19:44</Text>

                                    </View>

                                    <View style={{
                                        flexDirection: "row", justifyContent: "space-between", alignContent: "center",
                                        alignItems: "center", width: "90%"
                                    }}>

                                        <Text numberOfLines={1} style={{
                                            fontSize: 14, alignSelf: "flex-start", width: "80%",
                                        }}>Michael A Smith Michael A SmithMichael A Smith Michael A Smith Michael A Smith</Text>

                                            <View style={{
                                                width: "20%",
                                                alignItems: "center", 
                                                justifyContent:"flex-end",
                                                alignContent: "flex-end",
                                                alignSelf: "flex-end",
                                            }}>
                                                <Text style={{
                                            color: "white", fontSize: 9,  width: 26, height: 26,  
                                            backgroundColor: "green", borderRadius: 13,paddingTop:"10%",textAlign: "center", 

                                        }}>220</Text>
                                            </View>
                                        

                                    </View>



                                </View>


                            </View>

                       
                    </TouchableOpacity>

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
       
        height: "80%",
        width: "95%",
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
    crushNone: {
        display: 'none'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 5,
        marginLeft: 5,
        marginBottom: 8,
        marginTop: 8
    },
})



export default Chats

