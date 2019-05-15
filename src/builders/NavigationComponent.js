const AbstractBuilder = require('./AbstractBuilder');

class NavigationComponent extends AbstractBuilder {
    constructor(name, component) {
        super(name, component);
    }

    setTitle(title) {
        return this.setNavigationOption('title', title);
    }
};

module.exports = NavigationComponent;