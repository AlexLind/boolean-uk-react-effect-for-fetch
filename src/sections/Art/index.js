import ArtList from './components/ArtList';
import { useEffect, useState } from "react";

function ArtsSection() {
  let url = "https://api.artic.edu/api/v1/artworks?page=500&limit=5";

  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArtData(data.data));
  }, [url]);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList   artData={artData}  />
      </div>
    </section>
  );
}

export default ArtsSection;
