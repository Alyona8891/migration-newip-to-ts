import './news.css';
import { NewsItemEverythReadOnly } from '../../../types';
import Mine from './image/mine.svg';

class News {
    public draw(data: NewsItemEverythReadOnly[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as Element;

            if (idx % 2) {
                if (newsClone) {
                    newsClone.querySelector('.news__item')?.classList.add('alt');
                }
            }

            if (newsClone) {
                const newsMetaPhotoEl: HTMLTemplateElement | null = newsClone.querySelector('.news__meta-photo');
                if (newsMetaPhotoEl) {
                    newsMetaPhotoEl.style.backgroundImage = `url(${item.urlToImage || Mine})`;
                }
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
        const newsEl: HTMLTemplateElement | null = document.querySelector('.news');
        if (newsEl) {
            newsEl.innerHTML = '';
            newsEl.appendChild(fragment);
        }
    }
}

export default News;
