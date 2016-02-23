import React, { StyleSheet, View, Text, WebView} from 'react-native';
import * as ChartUtl from './chart.utl.js';
import Highcharts from 'highcharts';

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
          // Highcharts.Chart('sum-chart', {
          //     chart: {
          //         type: 'bar',
          //         renderTo: 'sum-chart',
          //         reflow: true,
          //         height: this.state.height,
          //         width: this.state.width,
          //         style: {
          //             fontFamily: 'Arial Narrow, Arial, sans serif'
          //         }
          //     },
          //     exporting: {
          //         enabled: false,
          //     },
          //     title: {
          //         text: this.state.chartTitle[0],
          //         align: 'left',
          //         style: {
          //             fontSize: '1.15em',
          //             fontWeight: 'bold'
          //         }
          //     },
          //     xAxis: {
          //         gridLineColor: null,
          //         lineColor: null,
          //         categories: this.state.cat,
          //         tickmarkPlacement: null,
          //         tickLength: 0,
          //         labels: {
          //             style: {
          //                 fontSize: '0.875em',
          //                 fontWeight: 'bold',
          //                 textOverflow: 'none'
          //             }
          //         }
          //     },
          //     credits: {
          //         enabled: false
          //     },
          //     plotOptions: {
          //         series: {
          //             colorByPoint: true
          //         },
          //         bar: {
          //             dataLabels: {
          //                 enabled: true,
          //                 align: 'left',
          //                 inside: true,
          //                 color: 'white',
          //                 style: {
          //                     fontSize: '1em',
          //                     textShadow: null
          //                 }
          //             }
          //         }
          //     },
          //     yAxis: {
          //         gridLineColor: null,
          //         plotBands: [{
          //             color: 'rgba(255, 204, 0, 0.67)',
          //             from: 75,
          //             to: 90,
          //             zIndex: 5
          //         },
          //             {
          //                 color: 'rgba(115, 208, 127, 0.67)',
          //                 from: 90,
          //                 to: 100,
          //                 zIndex: 5
          //             }],
          //         labels: {
          //             enabled: false
          //         },
          //         title: {
          //             enabled: false
          //         }
          //     },
          //     series: [{
          //         showInLegend: false,
          //         data: [this.state.randomSet[0], this.state.randomSet[1], this.state.randomSet[2], this.state.randomSet[3], this.state.randomSet[4]],
          //         colors: [this.state.aggregateCol, this.state.projectCol, this.state.projectCol, this.state.projectCol, this.state.nationalCol],
          //         groupPadding: 0,
          //         pointPadding: 0.07,
          //         borderColor: null
          //     }]
          // });
        },
        render() {
            return(
                <View>
                    <Text>{this.state.randomSet}</Text>
                    
                </View>
            );
        }
    });

export default _component;