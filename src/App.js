import React from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';
import Home from './components/Home';
import Chat from './components/Chat';
import Entry from './components/Entry';

import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import RnArt from './components/0-1RN-ART';


import {
    Router,
    Scene,
    Stack,
} from 'react-native-router-flux';


const getSceneStyle = ()=> ({
    backgroundColor: 'transparent',
})

export default class App extends React.Component {

    render () {
        return(
            <Router>
                <Scene key="root" style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
                    <Scene key="entry" component={Entry} title="Entry"/>
                    <Scene key="home" component={Home} title="Home"/>
                    <Scene key="chat" component={Chat} title="Chat"/>
                    <Scene key="day1" component={Day1} title="Day1-StopWatch"/>
                    <Scene key="day2" component={Day2} title="Day2-Weather"/>
                    <Scene key="day3" component={Day3} title="Day3"/>
                    <Scene key="day4" component={Day4} title="Day4"/>
                    <Scene key="rnart" component={RnArt} title="RnArt"/>
                </Scene>
            </Router>
        )
    }
}

