import React, {StyleSheet, Text, View, TabBarIOS} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const
    styles = StyleSheet.create({
        wrapper: {
            borderRadius: 5,
            marginBottom: 5
        },
        button: {
            backgroundColor: '#eeeeee',
            padding: 10
        },
        tabContent: {
            flex: 1,
            alignItems: 'center',
        },
        tabText: {
            color: 'white',
            margin: 50
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
      }
    }),
    _component =  React.createClass({

        statics: {
            title: 'Analytics',
            description: 'Analytics Tabs'
        },

        displayName: 'Analytics',

        getInitialState() {
            return {
                selectedTab: 'analyticsTab'
            };
        },

        _renderContent(color, pageText) {
            return(
                <View style={[styles.tabContent, {backgroundColor: color}]}>
                    <View style={{backgroundColor: '#296cdc', padding: 10}}>
                        <Text>
                            <Icon name="bar-chart" size={25} color="white"/>
                            <Icon name="pie-chart" size={25} color="white"/>
                            <Icon name="list" size={25} color="white"/>
                        </Text>
                    </View>
                    <Text style={styles.tabText}>{pageText}</Text>
                </View>
            );
        },

        render() {
            return (
                <TabBarIOS
                    tintColor="white"
                    barTintColor="#296cdc">
                    <Icon.TabBarItem
                        title="Analytics"
                        iconName="line-chart"
                        selectedIconName="line-chart"
                        iconSize={22}
                        selected={this.state.selectedTab === 'analyticsTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'analyticsTab',
                            });
                        }}>
                        {this._renderContent('#414A8C', 'Analytics Page')}
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title="Disposition Profile"
                        iconName="tasks"
                        selectedIconName="tasks"
                        iconSize={22}
                        selected={this.state.selectedTab === 'dispositionTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'dispositionTab',
                            });
                        }}>
                        {this._renderContent('#e4b600', 'Disposition Profile Page')}
                    </Icon.TabBarItem>
                    <Icon.TabBarItem
                        title="Demographic Profile"
                        iconName="users"
                        selectedIconName="users"
                        iconSize={22}
                        selected={this.state.selectedTab === 'demographicTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'demographicTab',
                            });
                        }}>
                        {this._renderContent('#ff9d00', 'Demographic Profile Page')}
                    </Icon.TabBarItem>
                </TabBarIOS>
                // <View style={styles.container}>
                //     <Text> Analytics Page </Text>
                // </View>
            );
        }
    });

export default _component;
