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
        bottom: 50,
        right: 16,
    }
}),
    chartData = [
        {
            name: 'BarChart',
            type: 'bar',
            color:'#97C3E6',
            widthPercent: 0.5,
            data: [75, 73.3, 92, 92, 79],
        },
    ],
    xLabels = ['0','1','2','3','4'],

_component = React.createClass({
    render() {
        return (
                <RNChart style={styles.chart}
                    chartData={chartData}
                    verticalGridStep={5}
                    showGrid={false}
                    xLabels={xLabels}
                 />
        );
    }
});

export default _component;
