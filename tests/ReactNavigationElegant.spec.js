const ReactNavigationElegant = require('../src/react-navigation-elegant');

describe('ReactNavigationElegant tests', () => {
    it('can add a stack navigation', () => {
        const reactNavigationElegant = new ReactNavigationElegant();

        expect(reactNavigationElegant.getStackNavigations().length).toBe(0);

        reactNavigationElegant.addStackNavigation('Testing', { navigation: '' });

        expect(reactNavigationElegant.getStackNavigations().length).toBe(1);
    });

    it('can add a tab navigation', () => {
        const reactNavigationElegant = new ReactNavigationElegant();

        expect(reactNavigationElegant.getTabNavigations().length).toBe(0);

        reactNavigationElegant.addTabNavigation('Testing', { navigation: '' });

        expect(reactNavigationElegant.getTabNavigations().length).toBe(1);
    });
});