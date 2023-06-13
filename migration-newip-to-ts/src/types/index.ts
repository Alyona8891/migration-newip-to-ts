type Source = {
    id: string;
    name: string;
};

interface NewsSource {
    status: string;
    articles: NewsItemEveryth[];
    sources: NewsItemSources[];
}

export type INewsSource = Partial<NewsSource>;

interface IT {
    a: number;
    b: string;
    c: boolean;
}

type StringType = Pick<IT, 'b'>;

export interface NewsItemEveryth {
    urlToImage: StringType;
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
