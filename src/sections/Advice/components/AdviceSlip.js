import React from "react";
export default function AdviceSlip({
  advice,
  setAdviceGiven,
  setFavoriteAdvice,
  favoriteAdvice
}) {
  return <> <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={() => setAdviceGiven(prev => prev + 1)}>Get More Advice</button>
        <button onClick={() => setFavoriteAdvice([...favoriteAdvice, advice])}>Save to Favourites</button></>;
}
  