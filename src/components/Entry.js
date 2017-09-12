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

const {Surface, Shape, Path} = ART;

export default class Home extends React.Component {

    // 构造
    state = {
        names:''
    };

    render() {
        const path = ART.Path();
        path.moveTo(1,1);
        path.lineTo(300,1);
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Entry</Text>
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
                >
                    <Text style={styles.buttonText}>
                        ChatApp
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
                >
                    <Text style={styles.buttonText}>
                        Day1-StopWatch
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
        // marginLeft:20,
        marginTop: 15,
        fontSize:15,
    },
    container: {
        // flex:1,
        // backgroundColor:"red",
        alignItems:'center'
    }
})

