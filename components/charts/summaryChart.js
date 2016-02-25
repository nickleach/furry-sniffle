import React, { StyleSheet, View, Component, WebView, Animated, Text } from 'react-native';
import TimerMixin from 'react-timer-mixin';


const
    _styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: 'white',
            height: 500,
            width: 500
        },
        mainContainer: {
            position: 'relative'
        },
        bar: {
            alignSelf: 'center',
            height: 20,
            marginRight: 5
        },
        aggregateBar: {
            backgroundColor: '#96C2E6',
        },
        stateBar: {
            backgroundColor: '#ABBDCE',
        },
        nationalBenchmarkBar: {
            backgroundColor: '#AFAFAF',
        },
        row: {
            flexWrap: 'nowrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 2
        },
        rowLabel: {
            marginRight: 5,
            width: 180,
            textAlign: 'right',
        },
        seventyFifthPercentile: {
            marginTop: 18,
            backgroundColor: '#FFCE00',
            width: 30,
            height: 120,
            position: 'absolute',
            right: 25,
            top: 0,
            opacity: 0.6,
        },
        ninetyPercentile: {
            marginTop: 18,
            backgroundColor: '#6DD47A',
            width: 20,
            height: 120,
            position: 'absolute',
            right: 5,
            top: 0,
            opacity: 0.6,
        },
        chartName: {
            color: '#4E4E4E',
            fontWeight: 'bold',
        },
        }),
    _component = React.createClass({
        mixins: [TimerMixin],
        propTypes: {
            chartName: React.PropTypes.string,
        },
        getInitialState() {
            return {
              ag: new Animated.Value(0),
              ga: new Animated.Value(0),
              fl: new Animated.Value(0),
              spha: new Animated.Value(0),
              nb: new Animated.Value(0),
            }
        },
        _handleAnimation () {
            const timing = Animated.timing;
            const width = {ag: 100, ga: 75, fl: 34, spha: 55, nb: 56};
            const indicators = ['ag', 'ga', 'fl', 'spha', 'nb']
            Animated.parallel(indicators.map(item => {
              return timing(this.state[item], {toValue: width[item] * 2})
            })).start()
        },
        componentDidMount() {
            this.setTimeout(
              () => { this._handleAnimation() },
              500
            );
        },
        render() {
            const {ag, ga, fl, spha, nb} = this.state
            return (
                <View style={_styles.mainContainer}>
                    <Text style={_styles.chartName}>{this.props.chartName}</Text>
                    <View style={_styles.row}>
                        <Text style={_styles.rowLabel}>Aggregate</Text>
                        {ag && <Animated.View style={[_styles.bar, _styles.aggregateBar, {width: ag}]} /> }
                    </View>
                    <View style={_styles.row}>
                        <Text style={_styles.rowLabel}>H1234 Georgia</Text>
                        {ga && <Animated.View style={[_styles.bar, _styles.stateBar, {width: ga}]} /> }
                    </View>
                    <View style={_styles.row}>
                        <Text style={_styles.rowLabel}>H5678 Florida</Text>
                        {fl && <Animated.View style={[_styles.bar, _styles.stateBar, {width: fl}]} /> }
                    </View>
                    <View style={_styles.row}>
                        <Text style={_styles.rowLabel}>SPHA Book of Business</Text>
                        {spha && <Animated.View style={[_styles.bar, _styles.stateBar, {width: spha}]} /> }
                    </View>
                    <View style={_styles.row}>
                        <Text style={_styles.rowLabel}>National Benchmark</Text>
                        {nb && <Animated.View style={[_styles.bar, _styles.nationalBenchmarkBar, {width: nb}]} /> }
                    </View>
                    <View style={_styles.seventyFifthPercentile}>
                    </View>
                        <View style={_styles.ninetyPercentile}>
                    </View>
                </View>
            );
        }
    });

export default _component;
