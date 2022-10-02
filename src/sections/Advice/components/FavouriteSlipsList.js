import React from "react";
export default function FavouriteSlipsList({
    favoriteAdvice
}) {
  return <><h3>Favourite Advice Slips</h3>
        <ul>
          {favoriteAdvice.map(item => {
        return <li key={favoriteAdvice.indexOf(item)}>{item}</li>;
      })}
        </ul></>;
}
  