import React, { StyleSheet, View, Text, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const
    _styles = StyleSheet.create({
        container: {
            marginTop: 65,
            marginLeft: 10,
            flex: 1,
        },
        button: {
            marginBottom: 10,
            width: 100,
            padding: 5,
            borderRadius: 8,
        },
        buttonText: {
            fontSize: 18,
            fontWeight: '200',
        },
        activeButtonText: {
            color: 'white',
        },
        activeButton: {
            backgroundColor: '#FC9845',
            marginBottom: 10,
            width: 120,
            padding: 5,
            borderRadius: 8,
        },
        headerText: {
            fontSize: 20,
            color: '#194981',
            fontStyle: 'italic',
            fontWeight: '500',
            textAlign: 'right',
            marginLeft: 10,
        },
        inactiveButtonText: {
            color: '#A2A0A1',
        },
        header: {
            flexWrap: 'nowrap',
            flexDirection: 'row',
            marginBottom: 20,
        },
    }),
    _component = React.createClass({
        propTypes: {
            changePage: React.PropTypes.func.isRequired,
            page: React.PropTypes.string
        },
        _goToSummary() {
            this.props.changePage({page: 'summary'});
        },
        _goToAnalytics() {
            this.props.changePage({page: 'analytics'})
        },
        _goToSurvey() {
            this.props.changePage({page: 'survey'})
        },
        render() {
            let
                summaryActive = this.props.page === 'summary' ? _styles.activeButton : _styles.button,
                analyticsActive = this.props.page === 'analytics' ? _styles.activeButton : _styles.button,
                surveyActive = this.props.page === 'survey' ? _styles.activeButton : _styles.button,
                summaryButtonText = this.props.page === 'summary' ? _styles.activeButtonText : _styles.inactiveButtonText,
                analyticsButtonText = this.props.page === 'analytics' ? _styles.activeButtonText : _styles.inactiveButtonText,
                surveyButtonText = this.props.page === 'survey' ? _styles.activeButtonText : _styles.inactiveButtonText;

            return (
                <View style={_styles.container}>
                    <View style={_styles.header}>
                        <Icon name="compass" size={30} color='#194981'/>
                        <Text style={_styles.headerText}>Navigation</Text>
                    </View>
                    <View>
                        <TouchableHighlight
                            style={summaryActive}
                            onPress={this._goToSummary}
                            underlayColor= '#FC9845'>
                            <Text style={[_styles.buttonText, summaryButtonText]}>Summary</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={analyticsActive}
                            onPress={this._goToAnalytics}
                            underlayColor= '#FC9845'>
                            <Text style={[_styles.buttonText, analyticsButtonText]}>Analytics</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={surveyActive}
                            onPress={this._goToSurvey}
                            underlayColor= '#FC9845'>
                            <Text style={[_styles.buttonText, surveyButtonText]}>Survey</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }
    });
export default _component;
