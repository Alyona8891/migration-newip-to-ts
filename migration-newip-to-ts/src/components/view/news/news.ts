import './news.css';
import { NewsItemEverythReadOnly } from '../../../types';
import Mine from './image/mine.svg';

class News {
    public draw(data: NewsItemEverythReadOnly[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element | null;

            if (idx % 2) {
                if (newsClone) {
                    newsClone.querySelector('.news__item')?.classList.add('alt');
                }
            }

            if (newsClone) {
                const newsMetaPhotoEl = newsClone.querySelector('.news__meta-photo') as HTMLTemplateElement;
                newsMetaPhotoEl.style.backgroundImage = `url(${item.urlToImage || Mine})`;

                const author = item.author || item.source.name;
                const newsMetaAuthorEl = newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthorEl) {
                    newsMetaAuthorEl.textContent = author;
                }

                const newsMetaDateEl = newsClone.querySelector('.news__meta-date');
                if (newsMetaDateEl) {
                    newsMetaDateEl.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }

                const newsDescriptionTitleEl = newsClone.querySelector('.news__description-title');
                if (newsDescriptionTitleEl) {
                    newsDescriptionTitleEl.textContent = item.title;
                }

                const newsDescriptionSourceEl = newsClone.querySelector('.news__description-source');
                if (newsDescriptionSourceEl) {
                    newsDescriptionSourceEl.textContent = item.source.name;
                }

                const newsDescriptionContentEl = newsClone.querySelector('.news__description-content');
                if (newsDescriptionContentEl) {
                    newsDescriptionContentEl.textContent = item.description;
                }

                const newsReadMore = newsClone.querySelector('.news__read-more a');
                if (newsReadMore) {
                    newsReadMore.setAttribute('href', item.url);
                }
                fragment.append(newsClone);
            }
        });
        const newsEl = document.querySelector('.news') as HTMLTemplateElement | null;
        if (newsEl) {
            newsEl.innerHTML = '';
            newsEl.appendChild(fragment);
        }
    }
}

export default News;
