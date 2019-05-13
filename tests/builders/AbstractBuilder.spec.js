const AbstractBuilder = require('../../src/builders/AbstractBuilder');

describe('Abstract builder test', () => {
    it('throws an error if no name or component is passed', () => {
        expect(() => {
            const abstractBuilder = new AbstractBuilder();
        }).toThrow('Please specify a name or a component');

        expect(() => {
            const abstractBuilder = new AbstractBuilder('name');
        }).toThrow('Please specify a name or a component');

        expect(() => {
            const abstractBuilder = new AbstractBuilder(undefined, 'component');
        }).toThrow('Please specify a name or a component');
    });

    it('there should be default options when getting navigation options', () => {
        const abstractBuilder = new AbstractBuilder('name', 'component');

        expect(abstractBuilder.getNavigationOptions()).toEqual({
            name: {
                screen: 'component',
                navigationOptions: {}
            }
        });
    });

    it('can set component option', () => {
        const abstractBuilder = new AbstractBuilder('name', 'component');

        abstractBuilder.setComponentOption('path', '/');

        expect(abstractBuilder.getNavigationOptions()).toEqual({
            name: {
                screen: 'component',
                path: '/',
                navigationOptions: {}
            }
        });
    });
});