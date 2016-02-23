
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Summary from './components/views/summary';
import Analytics from './components/views/analytics';
import SideMenu from 'react-native-side-menu';
import LeftMenu from './components/menus/leftMenu';

const
    styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
  }),
sphDemo = React.createClass({
    getInitialState() {
        return {
            page: 'summary'
        }
    },
    _getRoute() {
        switch (this.state.page) {
            case 'summary':
                return <Summary />
                break;
            case 'analytics':
                return <Analytics />
                break;
            default: <Summary />

        }
    },
    _updateRoute({ page }) {
        this.setState({ page });
    },
    render() {
        const page = this._getRoute();
        return (
            <SideMenu
                menu={<LeftMenu changePage={this._updateRoute}/>}
                openMenuOffset={200}>
                <SideMenu menu={<LeftMenu changePage={this._updateRoute}/>} menuPosition="right">
                    {page}
                </SideMenu>
            </SideMenu>
        );
    }
});



AppRegistry.registerComponent('sphDemo', () => sphDemo);
