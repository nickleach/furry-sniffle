import React, { StyleSheet, View, Component } from 'react-native';
import RNChart from 'react-native-chart';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        position: 'absolute',
        top: 16,
        left: 4,
        bottom: 4,
        right: 16,
    }
}),
    chartData = [
        {
            name: 'BarChart',
            type: 'bar',
            color:'purple',
            widthPercent: 0.6,
            data: [30, 1, 1, 2, 3, 5, 21, 13, 21, 34, 55, 30],
        },
    ],
    xLabels = ['0','1','2','3','4','5','6','7','8','9','10','11'],

_component = React.createClass({
    render() {
        return (
                <RNChart style={styles.chart}
                    chartData={chartData}
                    verticalGridStep={5}
                    xLabels={xLabels}
                 />
        );
    }
});

export default _component;
