import './sources.css';
import { NewsItemSources } from '../../../types';

class Sources {
    draw(data: NewsItemSources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
                const sourceItemNameEl = sourceClone.querySelector('.source__item-name');
                if (sourceItemNameEl) {
                    sourceItemNameEl.textContent = item.name;
                }

                const sourceItemEl = sourceClone.querySelector('.source__item');
                if (sourceItemEl) {
                    sourceItemEl.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);
            });
        }

        const sourcesEl = document.querySelector('.sources');
        if (sourcesEl) {
            sourcesEl.append(fragment);
        }
    }
}

export default Sources;
