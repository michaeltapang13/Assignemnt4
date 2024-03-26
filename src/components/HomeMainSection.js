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
        <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service. Learn more about our story and commitment to your satisfaction.</p>
        <button onClick={() => window.location.href='/products'}>Shop Now</button>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {randomReviews.map((review, index) => (
          <div key={index}>
            <p>{review.customerName}</p>
            <p>{review.reviewContent}</p>
            <p>Rating:{'★'.repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default HomeMainSection;