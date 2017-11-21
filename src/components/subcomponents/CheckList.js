/**
 * Created by Terence on 2017/10/19.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Image,
    Dimensions
} from 'react-native';

import Util from '../utils';

const choiceImg = require('../images/ios/main/Home/choice@2x.png');
const transparent = require('../images/transparent.png');

export default class CheckList extends Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
    }

    componentWillMount() {
        //this.initDataSource();
    }

    initDataSource() {
        this.listArr = this.props.dataSource != undefined ? this.props.dataSource : [];

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows(this.listArr)
        };
    }

    componentWillUnmount() {
    }

    setCheckList(rowData, sectionId, rowId) {
        let checkList = [];

        //render
        if (!this.props.isMultiCheck) {
            this.listArr.map((item, index) => {
                if (this.props.canNoneCheckForSingleMode) {
                    if (rowId != index) {
                        item.isSelected = false;
                    }
                } else {
                    item.isSelected = false;
                }
            });
        }
        this.listArr[rowId].isSelected = !this.listArr[rowId].isSelected;
        this.setState({
            dataSource: this.ds.cloneWithRows(this.listArr)
        });

        //data
        this.listArr.map((item, index) => {
            if (item.isSelected) {
                checkList.push(index);
            }
        });
        if (this.props.callback) {
            this.props.callback(checkList);
        }
    }

    renderRow(rowData, sectionId, rowId) {
        return (
            <TouchableOpacity style={styles.listContainer} onPress={() => this.setCheckList(rowData, sectionId, rowId)}>
                <View style={[{flex: 4}, {paddingLeft: 20}]}><Text>{rowData.title}</Text></View>
                <View style={[{flex: 1}, {marginLeft: 100}]}><Image
                    source={rowData.isSelected ? choiceImg : transparent}/></View>
            </TouchableOpacity>
        )
    }

    render() {
        this.initDataSource();

        return (
            <View>
                <View style={{width: Dimensions.get('window').width, height: 1, backgroundColor: '#b7b3b3'}}/>
                <View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer: {
        height: 50,
        width: Util.size.width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#b7b3b3',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#f5fcff'
    }
});