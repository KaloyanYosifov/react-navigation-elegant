const ReactNavigation = require('react-navigation');

class ReactNavigationElegant {
    construct() {
        this.stackNavigations = [];
        this.tabNavigations = [];
    }

    addNavigation(name, component) {
        const stackNavigatorOptions = {};
        stackNavigatorOptions[name] = {
            screen: component,
            navigationOptions: {
                title: 'Heome'
            }
        };

        const stackNavigator = ReactNavigation.createStackNavigator(stackNavigatorOptions);

        return ReactNavigation.createAppContainer(stackNavigator);
    }
};

module.exports = ReactNavigationElegant;