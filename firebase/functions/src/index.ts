import * as functions from "firebase-functions";
import { URLSearchParams } from "url";
const fetch = require('node-fetch');
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export interface MovieSummary {
  id: string;
  genrer: string;
  poster: string;
  title: string;
  ranking: number;
  sinopsis: string;
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

interface ImDBFindResponse {
  d: ImDBResult[];
}

export interface ImDBResult {
  id: string;
  l: string;
}

export interface MovieTitle {
  id: string;
  title: string;
}

const headers = {
  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  'x-rapidapi-key': '9ba6592aeemsh633be5bdfd3c764p1c9d2cjsn328075020874'
};

export const getTitlesWithIds = functions.https.onCall(async (data, context) => {
  const url = new URL("https://imdb8.p.rapidapi.com/auto-complete");
  url.search = new URLSearchParams([['q', data]]).toString();

  const response = await fetch(url.toString(), { headers });
  const imdbResponse = await response.json() as ImDBFindResponse;
  return imdbResponse.d.map(({ id, l }) => ({ id, title: l })) as MovieTitle[];
});



export const getMovieOverview = functions.https.onCall(async (data, context) => {
  const url = new URL("https://imdb8.p.rapidapi.com/title/get-overview-details");
  url.search = new URLSearchParams([['tconst', data]]).toString();

  const response = await fetch(url.toString(), { headers });
  const imdbResponse = await response.json() as ImDBDetailResponse;
  return {
    genrer: imdbResponse.genres[0],
    id: imdbResponse.id,
    poster: imdbResponse.title.image.url,
    title: imdbResponse.title.title,
    sinopsis: imdbResponse.plotSummary.text
  } as MovieSummary;
});