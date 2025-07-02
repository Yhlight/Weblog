(function (global) {
    const modules = {};
    const waiting = {};

    const STATE = {
        UNINITIALIZED: 'uninitialized',
        INITIALIZING: 'initializing',
        INITIALIZED: 'initialized'
    };

    function define(name, deps, factory) {
        if (modules[name]) return;
        modules[name] = {
            name,
            deps,
            factory,
            exports: {},
            state: STATE.UNINITIALIZED
        };
        initModule(name);
    }

    function require(name, callback) {
        const modul = modules[name];
        if (modul && modul.state === STATE.INITIALIZED) {
            callback(modul.exports);
        } else {
            waiting[name] = waiting[name] || [];
            waiting[name].push(callback);
        }
    }

    function initModule(name) {
        const modul = modules[name];
        if (!modul || modul.state === STATE.INITIALIZED) return;

        if (modul.state === STATE.INITIALIZING) return;

        modul.state = STATE.INITIALIZING;

        const deps = modul.deps.map(depName => {
            initModule(depName);
            return modules[depName] ? modules[depName].exports : {};
        });

        const result = modul.factory(...deps, modul.exports);
        if (result !== undefined) modul.exports = result;

        modul.state = STATE.INITIALIZED;

        if (waiting[name]) {
            waiting[name].forEach(cb => cb(modul.exports));
            delete waiting[name];
        }

        Object.keys(modules).forEach(initModule);
    }

    global.define = define;
    global.require = require;
})(window);