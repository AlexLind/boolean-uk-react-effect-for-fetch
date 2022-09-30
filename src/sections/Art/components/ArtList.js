import ArtListItem from './ArtListItem';
import React from "react";
export default function ArtList({ artData }) {
  return (
    <ul className="art-list">
      {artData.map((art) => {
        return (
          <ArtListItem  key={art.id}  art={art}  />
        );
      })}
    </ul>
  );
}
