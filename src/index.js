import './a';
import './b';

const importAsync = (moduleName) => {
    return import(/* webpackMode: "eager" */ `./${moduleName}`);
};

importAsync('async/a')
    .then(
        module => console.log('%s: %s', 'index', module.name)
    );
