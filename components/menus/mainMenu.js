import React, {StyleSheet, View, Text} from 'react-native';
import Summary from '../views/summary';
import Analytics from '../views/analytics';
import Survey from '../views/survey';
import Icon from 'react-native-vector-icons/FontAwesome';

const
    _styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: '#F5FCFF',
        },
        pageContainer: {
            flex: 1,
        },
        titleBar: {
            flexWrap: 'nowrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 30
        },
        appTitle: {
            fontSize: 30,
            color: '#1A3A62',
            fontWeight: 'bold',
            marginLeft: 20,
        },
        appTitleView: {
            borderRightColor: '#ABBDCE',
            borderRightWidth: 2,
            paddingRight: 20,
        },
        subhead: {

        },
        subheadText: {
            color: '#447095',
            fontSize: 30,
            marginLeft: 20,
            marginRight: 20
        },
    }),
    _component = React.createClass({
        propTypes: {
            page: React.PropTypes.string.isRequired,
            subhead: React.PropTypes.string.isRequired,
            toggleLeftMenu: React.PropTypes.func.isRequired,
        },
        _getRoute() {
            switch (this.props.page) {
                case 'summary':
                    return <Summary />
                    break;
                case 'analytics':
                    return <Analytics />
                    break;
                case 'survey':
                    return <Survey />
                    break;
                default: <Summary />

            }
        },
        _toggleLeftMenu() {
            this.props.toggleLeftMenu();
        },
        render() {
            const page = this._getRoute();
            return (
                <View style={_styles.mainContainer}>
                    <View style={_styles.titleBar}>
                        <Icon.Button
                            name="bars"
                            size={30}
                            color='#194981'
                            onPress={this._toggleLeftMenu}
                            backgroundColor='#F5FCFF'/>
                        <View style={_styles.appTitleView}>
                            <Text style={_styles.appTitle}>MEDICARE CAHPS</Text>
                        </View>
                        <View style={_styles.subhead}>
                            <Text style={_styles.subheadText}>{this.props.subhead}</Text>
                        </View>
                    </View>
                    <View style={_styles.pageContainer}>
                        {page}
                    </View>
                </View>
            );
        }
    });

export default _component;
