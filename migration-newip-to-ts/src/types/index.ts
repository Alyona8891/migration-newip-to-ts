type Source = {
    id: string;
    name: string;
};

export interface NewsSource {
    status: string;
    articles?: NewsItemEveryth[];
    sources?: NewsItemSources[];
}

export interface NewsItemEveryth {
    urlToImage: string;
    author: string;
    source: Source;
    publishedAt: string;
    title: string;
    description: string;
    url: string;
    content: string;
}

export interface NewsItemSources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export enum Endpoints {
    'everything',
    'sources',
}

export enum ErrorStatuses {
    status1 = 401,
    status2 = 404,
}
