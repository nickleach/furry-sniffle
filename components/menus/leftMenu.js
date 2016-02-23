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
            marginBottom: 10
        },
        buttonText: {
            fontSize: 18,
            color: '#A2A0A1',
            fontWeight: '200'
        },
        activeButton: {

        },
        headerText: {
            fontSize: 20,
            color: '#194981',
            fontStyle: 'italic',
            fontWeight: '500',
            textAlign: 'right',
            marginLeft: 10
        },
        header: {
            flexWrap: 'nowrap',
            flexDirection: 'row',
            marginBottom: 10
        }
    }),
    _component = React.createClass({
        propTypes: {
            changePage: React.PropTypes.func.isRequired
        },
        _goToSummary() {
            this.props.changePage({page: 'summary'});
        },
        _goToAnalytics() {
            this.props.changePage({page: 'analytics'})
        },
        render() {
            return(
                <View style={_styles.container}>
                    <View style={_styles.header}>
                        <Icon name="compass" size={30} color='#194981'/>
                        <Text style={_styles.headerText}>Navigation</Text>
                    </View>
                    <View>
                        <TouchableHighlight
                            style={_styles.button}
                            onPress={this._goToSummary}
                            underlayColor= '#FC9845'>
                            <Text style={_styles.buttonText}>Summary</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={_styles.button}
                            onPress={this._goToAnalytics}
                            underlayColor= '#FC9845'>
                            <Text style={_styles.buttonText}>Analytics</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={_styles.button}
                            onPress={this._goToSummary}
                            underlayColor= '#FC9845'>
                            <Text style={_styles.buttonText}>Survey</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            );
        }
    });
export default _component;
