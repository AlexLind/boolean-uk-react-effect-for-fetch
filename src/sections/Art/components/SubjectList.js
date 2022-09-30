import React from "react";
export default function SubjectList({ art }) {
  return (
    <>
      {" "}
      <h4>Terms:</h4>
      <ul>
        {art.term_titles.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </>
  );
}
