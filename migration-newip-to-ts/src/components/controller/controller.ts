import AppLoader from './appLoader';
import { Endpoints } from '../../types';

class AppController extends AppLoader {
    getSources(callback: () => void): void {
        super.getResp(
            {
                endpoint: Endpoints[1],
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: (data?: T) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoints[0],
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
