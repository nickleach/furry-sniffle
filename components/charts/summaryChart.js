import React, { StyleSheet, View, Text, WebView} from 'react-native';
import * as ChartUtl from './chart.utl.js';

const
    _component = React.createClass({
        getInitialState() {
            return {
                height: 250,
                width: 350,
                chartTitle: [
                    'GETTING NEEDED CARE',
                    'GETTING CARE QUICKLY',
                    'HOW WELL DOCTORS COMMUNICATE',
                    'CARE COORDINATION',
                    'CULTURAL COMPETENCE',
                    'ACCESS TO CARE',
                    'PLAN ADMINISTRATION',
                    'ACCESS TO INFORMATION'
                ],
                aggregateCol: 'rgba(153, 196, 228, 1)',
                projectCol: 'rgba(172, 189, 205, 1)',
                nationalCol: 'rgba(175, 175, 175, 1)',
                cat: ['Aggregate', '80101234 Georgia', '80105678 Florida', 'SPHA Book of Business', 'National Benchmark'],
                randomSet: [
                    ChartUtl.randomNumb(50, 100), 
                    ChartUtl.randomNumb(50, 100),
                    ChartUtl.randomNumb(50, 100),
                    ChartUtl.randomNumb(50, 100),
                    ChartUtl.randomNumb(50, 100)
                ],
            };
        },
        componentWillMount() {

        },
        render() {
            return(
                <View>
                    <Text>{this.state.height}</Text>                    
                </View>
            );
        }
    });

export default _component;