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
        <View>
            <Text style={styles.title}>Enter your name : </Text>
            <TextInput
                style={styles.nameInput}
                placeholder = 'Terence'
                onChangeText={(text) => {
                    this.setState({
                        names:text,
                    });
                }}
                value = {this.state.names}
            />
            <TouchableOpacity
                onPress={() => {
                    // navigate to second screen and to pass it the name
                    // alert(this.state.name);
                    console.log(this.state.names);
                    Actions.chat({
                        names: this.state.names,
                    });
                    // alert(this.state.names);
                }}
            >
                <Text style={styles.buttonText}>
                    Next
                </Text>
            </TouchableOpacity>
            <ART.Surface width={300} height={2}>
                <ART.Shape d={path} stroke="#000000" strokWidth={1}/>
            </ART.Surface>
        </View>
    );
  }
}

var styles = StyleSheet.create({
    title: {
        marginLeft: 20,
        marginTop: 20,
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
        marginLeft:20,
        fontSize:20,
    }

})

