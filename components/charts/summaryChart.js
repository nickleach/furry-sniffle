import React, { StyleSheet, View, Component, WebView } from 'react-native';


const _styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        height:500,
        width: 500
  },
}),
_component = React.createClass({
    componentDidMount() {

      },
    render() {
        return (
            <View style={_styles.container}>
                <WebView
                    ref="webviewbridge"
                    source={require('../../templates/summaryChart.html')}/>
            </View>
        );
    }
});

export default _component;
