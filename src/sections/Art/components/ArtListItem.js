import SubjectList from "./SubjectList";

export default function ArtListItem({ art }) {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt={art.alt_text}
        />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist_title}</p>
      <SubjectList art={art}/>
    </li>
  );
}
