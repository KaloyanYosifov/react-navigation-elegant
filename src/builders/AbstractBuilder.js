class AbstractBuilder {
    constructor(name, component) {
        if (!name || !component) {
            throw new Error('Please specify a name or a component');
        }

        this.name = name;

        this.builderNavigationOptions = {
            componentOptions: {
                screen: component,
                navigationOptions: {

                }
            }
        };
    }

    /**
     * Set navigation option
     * @param string name 
     * @param mixed value 
     */
    setNavigationOption(name, value) {
        this.builderNavigationOptions.componentOptions.navigationOptions[name] = value;

        return this;
    }

    /**
     * Set component option
     * @param string name 
     * @param mixed value 
     */
    setComponentOption(name, value) {
        if (name === 'navigationOptions') {
            throw new Error('Do not override the navigationOptions key from the builder');
        }

        this.builderNavigationOptions.componentOptions[name] = value;

        return this;
    }

    getNavigationOptions() {
        return { [this.name]: this.builderNavigationOptions.componentOptions };
    }
}

module.exports = AbstractBuilder;