const ReactNavigation = require('react-navigation');
const NavigationComponent = require('./builders/NavigationComponent');

class ReactNavigationElegant {
    constructor() {
        this.stackNavigations = [];
        this.tabNavigations = [];
    }

    addStackNavigation(name, component) {
        const navigationComponent = new NavigationComponent(name, component);

        this.stackNavigations.push(navigationComponent);

        return navigationComponent;
    }

    addTabNavigation(name, component) {
        const navigationComponent = new NavigationComponent(name, component);

        this.tabNavigations.push(navigationComponent);

        return navigationComponent;
    }

    createStackNavigator() {
        return ReactNavigation.createStackNavigator({ ...this.stackNavigations });
    }

    createTabNavigator() {
        return ReactNavigation.createTabNavigator({ ...this.stackNavigations });
    }

    getStackNavigations() {
        return this.stackNavigations;
    }

    getTabNavigations() {
        return this.tabNavigations;
    }
};

module.exports = ReactNavigationElegant;