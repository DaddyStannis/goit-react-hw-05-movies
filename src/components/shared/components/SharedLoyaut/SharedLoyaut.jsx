import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from './Container/Container';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';

const SharedLoyaut = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLoyaut;
