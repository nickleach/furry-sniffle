import React, {StyleSheet, Text, View, TabBarIOS} from 'react-native';

const
    styles = StyleSheet.create({
        tabButton: {
            borderColor: 'white',
            borderRadius: 3,
            borderWidth: 1,
            borderStyle: 'solid'            
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
                    <Text style={styles.tabText}>{pageText}</Text>
                </View>
            );
        },

        render() {
            return (
                <TabBarIOS
                    tintColor="white"
                    barTintColor="#296cdc">
                    <TabBarIOS.Item
                        title="Analytics"
                        style={styles.tabButton}
                        selected={this.state.selectedTab === 'analyticsTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'analyticsTab',
                            });
                        }}>
                        {this._renderContent('#414A8C', 'Analytics Page')}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="Disposition Profile"
                        selected={this.state.selectedTab === 'dispositionTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'dispositionTab',
                            });
                        }}>
                        {this._renderContent('#e4b600', 'Disposition Profile Page')}
                    </TabBarIOS.Item>
                    <TabBarIOS.Item
                        title="Demographic Profile"
                        selected={this.state.selectedTab === 'demographicTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'demographicTab',
                            });
                        }}>
                        {this._renderContent('#ff9d00', 'Demographic Profile Page')}
                    </TabBarIOS.Item>
                </TabBarIOS>
                // <View style={styles.container}>
                //     <Text> Analytics Page </Text>
                // </View>
            );
        }
    });

export default _component;
