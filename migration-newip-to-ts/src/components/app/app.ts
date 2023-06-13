import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsSource } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesEl = document.querySelector('.sources') as HTMLTemplateElement | null;
        if (sourcesEl) {
            sourcesEl.addEventListener('click', (e) =>
                this.controller.getNews(e, (data?: NewsSource) => {
                    if (data) {
                        this.view.drawNews(data);
                    }
                })
            );
            this.controller.getSources((data?: NewsSource) => {
                if (data) {
                    this.view.drawSources(data);
                }
            });
        }
    }
}

export default App;
