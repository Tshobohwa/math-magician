import { useEffect, useState } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      const apiUrl = 'https://api.api-ninjas.com/v1/quotes?';
      const apiKey = 'GW/nH+IyIIMUMHe5b3eNMg==D6vYv9icUf6pXOdR';
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error('Enable to get the quote');
        const data = await response.json();
        const quoteData = data[0];
        setQuote(quoteData);
      } catch (err) {
        setError(err.message);
      }
    };
    getQuote();
  }, []);

  return (
    <div className="quote-container">
      {!error && !quote && <p className="quote-loading"> loading ...</p>}
      {error && <p className="quote-error">{error}</p>}
      {quote && (
        <div className="quote-wraper">
          <p className="quote-text">
            &quot;
            {quote.quote}
            {' '}
            &quot;
          </p>
          <p className="quote-author">{quote.author}</p>
          <p className="quote-category">{quote.category}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
