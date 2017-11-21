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

import CheckList from '../../src/components/subcomponents/CheckList';


export default class CheckListTest extends React.Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.listArr = [];

        this.selectDay = [];

        that = this;

        this.state = {};
    }

    transformSelectDay(selectDay) {
        let returnParams = [];
        selectDay.map((item, index)=> {
            returnParams[index] = item + 1;
        });

        return returnParams;
    }

    prepareCheckListData() {
        this.listArr = [
            {
                "title": "Mon",
                "isSelected": false
            },
            {
                "title": "Tue",
                "isSelected": false,
            },
            {
                "title": "Wed",
                "isSelected": false,
            },
            {
                "title": "Thur",
                "isSelected": false,
            },
            {
                "title": "Fri",
                "isSelected": false,
            },
            {
                "title": "Sat",
                "isSelected": false,
            },
            {
                "title": "Sun",
                "isSelected": false,
            }
        ];

        this.selectDay.map((item, index)=>{
            this.listArr[item-1].isSelected = true;
        });
    }

    componentWillMount() {
        this.prepareCheckListData();
        alert(this.listArr);
    }

    render() {
        return (
            <View>
                <CheckList isMultiCheck={true} dataSource={this.listArr} canNoneCheckForSingleMode={false} callback={(data)=>{
                    console.log(data);
                    this.selectDay = this.transformSelectDay(data);
                }}/>
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
        marginLeft: 20,
        fontSize: 20,
    }

})

