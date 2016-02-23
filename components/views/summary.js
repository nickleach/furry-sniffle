import React, {StyleSheet, Text, View} from 'react-native';

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
      }
    }),
    _component =  React.createClass({
        render() {
            return (
                <View style={styles.container}>
                    <Text> Summary Page </Text>
                </View>
            );
        }
    });

export default _component;
