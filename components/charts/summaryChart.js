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
            widthPercent: 0.6,
            data: [75, 73.3, 92, 92, 79],
            showDataPoint: true,
            dataPointColor: 'black'
        },
    ],
    xLabels = ['Aggregate','80101234 Georgia','80105678 Florida','SPHA Book of Business','National Benchmark'],

_component = React.createClass({
    render() {
        return (
                <RNChart style={styles.chart}
                    chartData={chartData}
                    showGrid={false}
                    showAxis={false}
                    showYAxisLabels={false}
                    xLabels={xLabels}
                 />
        );
    }
});

export default _component;
