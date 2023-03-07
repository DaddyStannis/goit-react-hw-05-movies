import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLoyaut from './shared/components/SharedLoyaut/SharedLoyaut';
const HomePage = lazy(() => import('./modules/pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./modules/pages/MoviesPage/MoviesPage'));
const MovieDetailPage = lazy(() =>
  import('./modules/pages/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() =>
  import('./modules/pages/MovieDetailsPage/CastPage/CastPage')
);
const ReviewsPage = lazy(() =>
  import('./modules/pages/MovieDetailsPage/ReviewsPage/ReviewsPage')
);
const Page404 = lazy(() => import('./modules/pages/Page404/Page404'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyaut />}>
        <Route index element={<HomePage />}></Route>
        <Route path="search/search-movie/" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId" element={<MovieDetailPage />}>
          <Route path="cast" element={<CastPage />}></Route>
          <Route path="reviews" element={<ReviewsPage />}></Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};
