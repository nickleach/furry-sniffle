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
        top: 125,
        left: 450,
        bottom: 200,
        right: 10
    }
}),
    chartData = [
        {
            name: 'PieChart',
            type: 'pie',
            widthPercent: 0.6,
            data: [50, 20, 30],
            sliceColors: ['#E18165', '#62759B', '#FFD019']
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