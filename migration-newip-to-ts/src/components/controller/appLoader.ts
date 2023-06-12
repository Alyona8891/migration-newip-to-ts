import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: 'e1bcde9bafd54548b8f71ea0dbeec84d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
