import React, { StyleSheet, View, Text, TouchableHighlight} from 'react-native';

const
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
                <View>
                    <TouchableHighlight onPress={this._goToSummary}>
                        <Text>Summary</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._goToAnalytics}>
                        <Text>Analytics</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this._goToSummary}>
                        <Text>Survey</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    });
export default _component;
