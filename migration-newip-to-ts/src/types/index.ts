export interface Res {
  status: string,
  sources: string[],
};

export interface Sources {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
};
 type Source = {
  name: string,
 }
export interface NewsItem {
  urlToImage: string,
  author: string,
  source: Source,
  publishedAt: string,
  title: string,
  description: string,
  url: string,
  name: string,
  id: string,
};
