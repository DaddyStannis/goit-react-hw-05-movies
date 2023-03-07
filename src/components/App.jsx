import { Routes, Route } from 'react-router-dom';
import SharedLoyaut from './shared/components/SharedLoyaut/SharedLoyaut';
import HomePage from './modules/pages/HomePage/HomePage';
import MoviesPage from './modules/pages/MoviesPage/MoviesPage';
import MovieDetailPage from './modules/pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from './modules/pages/MovieDetailsPage/CastPage/CastPage';
import ReviewsPage from './modules/pages/MovieDetailsPage/ReviewsPage/ReviewsPage';
import Page404 from './modules/pages/Page404/Page404';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLoyaut />}>
        <Route index element={<HomePage />} end></Route>
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
