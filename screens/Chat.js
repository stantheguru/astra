import { useState, useEffect, useIsFocused, useRef } from "react";
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View, FlatList, Image, LogBox
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import { AntDesign, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Card } from "react-native-cards";


const Chat = () => {
    const [items, setItems] = useState(null);
    const [text, setText] = useState(null);
    const scrollViewRef = useRef();


    useEffect(async () => {

        var formDat = new FormData();

        //alert(now)
        try {

            formDat.append("task_id", 1)

            const response = await fetch("https://gjenge.herokuapp.com/chats", {
                method: 'POST',
                headers: {
                    'content-type': 'multipart/form-data',
                },
                body: formDat,
            });
            const json = await response.json();
            const success = json.success;
            setItems(json)



        } catch (e) {
            //alert(e)
        }

        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

        //fetch the coordinates and then store its value into the coords Hook.

    }, [items]);

    const FetchChats = async () => {
        var formDat = new FormData();
        formDat.append("task_id", 1)

        const response = await fetch("https://acbe-197-156-137-153.ngrok.io/chats", {
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data',
            },
            body: formDat,
        });
        const json = await response.json();
        const success = json.success;

        setItems(json)
    }



    const Send = async () => {
        try {
            if (text == "") {

            } else {
                var formData = new FormData()

                formData.append("client_email", 'c@g.com');
                formData.append("worker_email", 'w@g.com');
                formData.append("sender", 'w@g.com');
                formData.append("message", text);
                formData.append("task_id", 1);

                const response = await fetch("https://gjenge.herokuapp.com/send_chat", {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                });
                //Callback();
                const json = await response.json();

                const success = json.success;
                setText("")
                FetchChats()
            }



        } catch (e) {
            //alert(e)
        }

    }




    return (
        <View style={styles.container}>


            <Card style={{
                alignContent: "center",
                justifyContent: "center", marginBottom: 36,

            }}>
                <View style={{
                    flexDirection: "row", alignContent: "center", alignItems: "center", width: "100%"
                }}>

                    <TouchableOpacity style={styles.back}>

                        <AntDesign style={{
                            fontWeight: "bold"
                        }} size={24} name="arrowleft" color="black" />

                    </TouchableOpacity>

                    <Image style={styles.image
                    } source={require("../assets/ceo.jpg")} />

                    <View style={{

                        width: "67%"

                    }}>

                        <Text style={styles.name}>Warlords of Kaah</Text>
                        <Text style={styles.seen}>Online</Text>



                    </View>


                    <TouchableOpacity style={styles.options}>

                        <SimpleLineIcons style={{

                        }} size={18} name="options-vertical" color="black" />

                    </TouchableOpacity>





                </View>

            </Card>


            <ScrollView >

                <FlatList  style={{

                        backgroundColor: "#f0f2f1",
                        paddingTop: 20,
                        paddingBottom: 20

                    }}

                    data={items}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <View style={item.sender === 'c@g.com' ? styles.card : styles.cardR}>

                            <View style={{ marginLeft: 5 }}>
                                <Text style={{
                                    color: "#000"
                                }}>{item.message}</Text>

                                {item.sender === 'w@g.com' ?

                                    <Text style={{
                                        color: "gray",
                                        alignSelf: "flex-end",
                                        fontSize: 10
                                    }}>{item.sent_time.substring(0, 5)}{item.read === "false" ? <AntDesign size={10} name="check" color="gray" />
                                        : <Text><AntDesign size={10} name="check" color="#34B7F1" /><AntDesign size={10} name="check" color="#34B7F1" /></Text>}</Text>
                                    : (
                                        <Text style={{
                                            color: "gray",
                                            alignSelf: "flex-end", marginRight: 5, fontSize: 10
                                        }}>{item.sent_time.substring(0, 5)}</Text>
                                    )}
                            </View>
                        </View>

                    )}
                />
            </ScrollView>
            <View style={styles.flexRow}>
                <TextInput multiline
                    onChangeText={(text) => setText(text)}
                    onSubmitEditing={() => {
                        Send();
                        setText(null);
                    }}
                    placeholder="what do you need to do?"
                    style={styles.input}
                    value={text}
                />
                <TouchableOpacity style={styles.btn} onPress={Send}>

                    <SimpleLineIcons size={24} name="paper-plane" color="white" />

                </TouchableOpacity>

            </View>

            




        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 70,

    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    flexRow: {
        flexDirection: "row",
        marginRight: "5%",
        alignItems: "center",
        maxHeight: 200
    },

    input: {
        borderColor: "#dedede",
        borderRadius: 20,
        borderWidth: 1,
        margin: 10,
        padding: 8,
        width: "84%",

    },
    btn: {
        width: 48,
        justifyContent: "center",

        alignSelf: "center",
        alignItems: "center",
        borderRadius: 40,
        height: 48,
        backgroundColor: "#128C7E",

    },

    back: {
        width: 48,
        justifyContent: "center",

        alignSelf: "center",
        alignItems: "center",
        height: 48,

    },
    options: {
        width: 48,
        justifyContent: "center",

        alignSelf: "center",
        alignItems: "center",
        height: 48,

    },
    listArea: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        paddingTop: 16,
    },
    sectionContainer: {
        marginBottom: 16,
        marginHorizontal: 16,
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8,
    },

    card: {
        marginLeft: 10,
        backgroundColor: "#fff",
        width: "75%",
        marginBottom: 10,
        padding: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: "#dedede",

    },

    cardR: {
        marginRight: 10,
        backgroundColor: "#dcf8c6",
        width: "75%",
        marginBottom: 10,
        padding: 5,
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: "#dedede",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,



    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 5,
        marginBottom: 8,
        marginTop: 8

    },
    name: {
        height: 15,
        borderRadius: 40,
        marginRight: 5,
        marginLeft: 5,

        marginTop: 4,
        fontWeight: "bold", fontSize: 16,

    },
    seen: {
        height: 15,
        borderRadius: 40,
        marginRight: 5,
        marginLeft: 5,

        marginTop: 4,
        fontWeight: "bold", fontSize: 12,
        color: "green"

    },
});