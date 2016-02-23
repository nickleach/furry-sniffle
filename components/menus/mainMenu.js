import React, {StyleSheet, View, Text} from 'react-native';
import Summary from '../views/summary';
import Analytics from '../views/analytics';
import Survey from '../views/survey';
import Icon from 'react-native-vector-icons/FontAwesome';
import Orientation from 'react-native-orientation';
console.dir(Orientation);

const
    _styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: '#F5FCFF',
        },
        pageContainer: {
            flex: 1,
            marginTop: 20,
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
        _orientationDidChange(orientation) {
            if (orientation == 'LANDSCAPE') {
                console.log('did-change-landscape');
            } else {
                console.log('did-change-else');
            }
        },

        componentWillMount() {
            //The getOrientation method is async. It happens sometimes that
            //you need the orientation at the moment the js starts running on device.
            //getInitialOrientation returns directly because its a constant set at the
            //beginning of the js code.
            Orientation.getOrientation((err,orientation)=> {
                console.log("Current Device Orientation: ", orientation);
                if (orientation === 'PORTRAIT') {
                    console.log('will-mount-portrait');
                } else {
                    console.log('mount-else');
                }
            });
        },

        componentDidMount() {
            // Orientation.lockToPortrait(); //this will lock the view to Portrait
            //Orientation.lockToLandscape(); //this will lock the view to Landscape
            Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations

            Orientation.addOrientationListener(this._orientationDidChange);
        },

        componentWillUnmount() {
            Orientation.getOrientation((err,orientation)=> {
                console.log("Current Device Orientation: ", orientation);
            });
            Orientation.removeOrientationListener(this._orientationDidChange);
        },
        propTypes: {
            page: React.PropTypes.string.isRequired,
            subhead: React.PropTypes.string.isRequired,
            toggleLeftMenu: React.PropTypes.func.isRequired,
            toggleRightMenu: React.PropTypes.func.isRequired,
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
        _toggleRightMenu() {
            this.props.toggleRightMenu();
        },
        render() {
            return (
                <View style={_styles.mainContainer}>
                    <View style={_styles.titleBar}>
                        <Icon.Button
                            name="arrow-left"
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
                        <Icon.Button
                            name="arrow-right"
                            size={30}
                            color='#194981'
                            onPress={this._toggleRightMenu}
                            backgroundColor='#F5FCFF'/>
                    </View>
                    <View style={_styles.pageContainer}>
                        {this.props.currentPage}
                    </View>
                </View>
            );
        }
    });

export default _component;
