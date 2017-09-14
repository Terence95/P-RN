import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ART
} from 'react-native';

import {
    Actions
} from 'react-native-router-flux';

import Util from './utils';

const {Surface, Shape, Path} = ART;

export default class Home extends React.Component {

    // 构造
    state = {
        names:''
    };

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                    // navigate to second screen and to pass it the name
                    // alert(this.state.name);
                    console.log(this.state.names);
                    Actions.home({
                        names: this.state.names,
                    });
                    // alert(this.state.names);
                  }}
                    style={styles.touchContainer}
                >
                    <Text style={styles.buttonText}>
                        0.ChatApp
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                    // navigate to second screen and to pass it the name
                    // alert(this.state.name);
                    console.log(this.state.names);
                    Actions.rnart({
                        names: this.state.names,
                    });
                    // alert(this.state.names);
                  }}
                    style={styles.touchContainer}
                >
                    <Text style={styles.buttonText}>
                        0-1.RnArt
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                    // navigate to second screen and to pass it the name
                    // alert(this.state.name);
                    console.log(this.state.names);
                    Actions.day1({
                        names: this.state.names,
                    });
                    // alert(this.state.names);
                }}
                    style={styles.touchContainer}
                >
                    <Text style={styles.buttonText}>
                        1.Day1-StopWatch
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                    Actions.day2({
                        names: this.state.names,
                    });
                }}
                    style={styles.touchContainer}
                >
                    <Text style={styles.buttonText}>
                        2.Day2-Weather
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                    Actions.day3({
                        names: this.state.names,
                    });
                }}
                    style={styles.touchContainer}
                >
                    <Text style={styles.buttonText}>
                        3.Day3-swiper
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                    Actions.day4({
                        names: this.state.names,
                    });
                }}
                    style={styles.touchContainer}
                >
                    <Text style={styles.buttonText}>
                        4.Day4
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    title: {
        // marginLeft: 20,
        marginTop: 10,
        fontSize: 20,
    },
    nameInput: {
        height: 40,
        borderWidth: 2,
        borderColor: 'black',
        margin: 20,
        padding: 5,
    },
    buttonText: {
        color: "#0084ff",
        // width:
        marginTop: 15,
        fontSize: 15,
        textAlign:"left",
    },
    container: {
        // flex:1,
        // backgroundColor:"red",
        alignItems:'center',
        justifyContent:"center"
        // textAlign: 'center'
    },
    touchContainer: {
        // width: Util.size.width-100,
        // alignItems: "flex-start",
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        // backgroundColor: "red",

    }
})

