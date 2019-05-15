const ReactNavigationElegant = require('../src/react-navigation-elegant');

describe('ReactNavigationElegant tests', () => {
    it('can add a stack navigation', () => {
        const reactNavigationElegant = new ReactNavigationElegant();

        expect(reactNavigationElegant.getStackNavigations().length).toBe(0);

        reactNavigationElegant.addStackNavigation('Testing', { navigation: '' });

        expect(reactNavigationElegant.getStackNavigations().length).toBe(1);
    });
});