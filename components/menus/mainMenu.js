import React, {StyleSheet, View} from 'react-native';
import Summary from '../views/summary';
import Analytics from '../views/analytics';
import Survey from '../views/survey';

const
    _styles = StyleSheet.create({
          container: {
            flex: 1
          },
    }),
    _component = React.createClass({
        propTypes: {
            page: React.PropTypes.string.isRequired
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
        render() {
            const page = this._getRoute();
            return (
                <View style={_styles.container}>
                    {page}
                </View>
            );
        }
    });

export default _component;
