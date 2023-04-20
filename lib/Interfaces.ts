export interface IListSurah {
  _key: string;
  _id: string;
  _rev: string;
  id: number;
  total_verses: number;
  transliteration: string;
  translation: string;
}

export interface IAyah {
  id: number;
  text: string;
  translation: string;
}

export interface ISurah {
  _key: string;
  _id: string;
  _rev: string;
  id: number;
  name: string;
  transliteration: string;
  translation: string;
  type: string;
  total_verses: number;
  verses: IAyah[];
}

export interface IParams<P> {
  params: P;
  searchParams: any;
}
