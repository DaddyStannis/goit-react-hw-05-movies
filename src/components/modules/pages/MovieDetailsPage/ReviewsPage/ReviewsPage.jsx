import uuid from 'react-uuid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'components/api/movies-api';
import { addLeadingZero } from 'components/shared/utils/utils';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const elements = reviews.map(review => {
    const updated = new Date(review.updated_at);
    return (
      <li key={uuid()}>
        <h3>{review.author}</h3>
        <p>{`${addLeadingZero(updated.getDate())}.${addLeadingZero(
          updated.getMonth()
        )}.${updated.getFullYear()}`}</p>
        <p>{review.content}</p>
      </li>
    );
  });

  if (elements.length) {
    return <ul> {elements} </ul>;
  } else {
    return <p>We don't have any reviews on this movie.</p>;
  }
};

export default ReviewsPage;
