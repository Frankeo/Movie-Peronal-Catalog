export interface MovieSummary {
  id: string;
  genrer: string;
  poster: string;
  title: string;
  ranking: number;
  sinopsis: string;
}

export interface ImDBFindResponse {
  d: ImDBResult[];
}

export interface ImDBDetailResponse {
  id: string;
  title: {
    title: string;
    image: {
      url: string;
    }
  }
  plotSummary: {
    text: string;
  }
  genres: string[];
}

export interface ImDBResult {
  id: string;
  l: string;
}

export interface MovieTitle {
  id: string;
  title: string;
}

export interface MovieUploaded {
  id: string;
  title: string;
  ranking: number;
}