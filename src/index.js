import './a';
import './b';

const importAsync = (name) => {
    return import(`./async${name}`);
};
