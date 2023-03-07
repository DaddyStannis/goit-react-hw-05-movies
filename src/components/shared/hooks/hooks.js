import { useSearchParams } from 'react-router-dom';

function useSearchMovie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('q');
  const setSearch = q => {
    setSearchParams(prevParams => {
      return { ...prevParams, q };
    });
  };
  return [search, setSearch];
}

export { useSearchMovie };
