import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e1bcde9bafd54548b8f71ea0dbeec84d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
