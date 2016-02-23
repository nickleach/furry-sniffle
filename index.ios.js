
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MainMenu from './components/menus/mainMenu';
import SideMenu from 'react-native-side-menu';
import LeftMenu from './components/menus/leftMenu';

const
    _styles = StyleSheet.create({
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
    _updateRoute({ page }) {
        this.setState({ page });
    },
    render() {
        return (
            <SideMenu
                menu={<LeftMenu changePage={this._updateRoute}/>}
                openMenuOffset={200}>
                <SideMenu menu={<LeftMenu changePage={this._updateRoute}/>} menuPosition="right">
                    <MainMenu page={this.state.page} />
                </SideMenu>
            </SideMenu>
        );
    }
});



AppRegistry.registerComponent('sphDemo', () => sphDemo);
