import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '3f96fafa9cc448b38310a0807b6a196c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
