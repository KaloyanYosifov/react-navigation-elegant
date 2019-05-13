const NavigationComponent = require('../../src/builders/NavigationComponent');

describe('Navigation Component Test', () => {
    it('on construction it has name and screen default navigation options', () => {
        const componentName = 'ComponentName';
        const randomObject = {
            testing: 'test'
        };

        const navigationComponent = new NavigationComponent(componentName, randomObject);

        expect(navigationComponent.getNavigationOptions()).toEqual({
            [componentName]: {
                navigationOptions: {},
                screen: randomObject
            }
        });
    });
});