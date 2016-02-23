
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
            page: 'summary',
            subhead: 'ENTERPRISE PERFORMANCE SUMMARY',
            leftMenuOpen: false,
            rightMenuOpen: false
        }
    },
    _updateRoute( p, sh ) {
        this.setState({ page : p, subhead : sh});
    },
    _toggleRightMenu() {
        this.setState({
            rightMenuOpen: !this.state.rightMenuOpen
        });
    },
    _toggleLeftMenu() {
        this.setState({
            leftMenuOpen: !this.state.leftMenuOpen
        });
    },
    render() {
        return (
            <SideMenu
                menu={<LeftMenu
                        changePage={this._updateRoute}
                        page={this.state.page}/>}
                openMenuOffset={200}
                isOpen={this.state.leftMenuOpen}>
                <SideMenu menu={<LeftMenu
                                    changePage={this._updateRoute}/>}
                                    page={this.state.page}
                                    menuPosition="right"
                          openMenuOffset={200}
                          isOpen={this.state.rightMenuOpen}>
                    <MainMenu
                        page={this.state.page}
                        subhead={this.state.subhead}
                        toggleRightMenu={this._toggleRightMenu}
                        toggleLeftMenu={this._toggleLeftMenu}/>
                </SideMenu>
            </SideMenu>
        );
    }
});



AppRegistry.registerComponent('sphDemo', () => sphDemo);
