export interface NewsSource {
    status: string;
    articles?: NewsItemEveryth[];
    sources?: NewsItemSources[];
}

export interface NewsItemEveryth {
    urlToImage: string;
    author: string;
    source: {
        id: string;
        name: string;
    };
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
