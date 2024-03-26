import React, { useEffect, useState } from 'react';
import reviews from '../data/reviews';

function HomeMainSection() {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
    setRandomReviews(shuffledReviews.slice(0, 2));
  }, []);

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>Our Vision and Mission...</p>
        <button onClick={() => window.location.href='/products'}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index}>
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>{'★'.repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default HomeMainSection;