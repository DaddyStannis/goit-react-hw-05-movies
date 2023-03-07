const API_KEY = '6fd348fe18bef9bb707babb2bc9e952a';
const URL = 'https://api.themoviedb.org/3/';

async function fetchTrendingMoviesOfDay(page = 1) {
  const urlParams = new URLSearchParams({
    api_key: API_KEY,
    page,
  });
  const url = `${URL}trending/movie/day?${urlParams}`;

  return fetchJson(url);
}

async function fetchMoviesBySearch(query, page = 1) {
  const urlParams = new URLSearchParams({
    api_key: API_KEY,
    page,
    query,
  });
  const url = `${URL}search/movie?${urlParams}`;

  return fetchJson(url);
}

async function fetchMovieDetail(id) {
  const urlParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const url = `${URL}movie/${id}?${urlParams}`;

  return fetchJson(url);
}

async function fetchMovieCast(id) {
  const urlParams = new URLSearchParams({
    api_key: API_KEY,
  });
  const url = `${URL}movie/${id}/credits?${urlParams}`;

  return fetchJson(url);
}

async function fetchMovieReviews(id, page = 1) {
  const urlParams = new URLSearchParams({
    api_key: API_KEY,
    page,
  });
  const url = `${URL}movie/${id}/reviews?${urlParams}`;

  return fetchJson(url);
}

async function fetchImage(path, width = 400) {
  const w = `w${width}`;
  const url = `https://image.tmdb.org/t/p/${w}${path}`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.blob();
    } else {
      throw new Error(response.statusText);
    }
  });
}

async function fetchJson(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  });
}

export {
  fetchTrendingMoviesOfDay,
  fetchMoviesBySearch,
  fetchMovieDetail,
  fetchMovieCast,
  fetchMovieReviews,
  fetchImage,
};
