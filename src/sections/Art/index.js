import ArtList from './components/ArtList';
import { useEffect, useState } from "react";

function ArtsSection() {
  const [artData, setArtData] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=500&limit=5")
      .then((res) => res.json())
      .then((data) => setArtData(data.data));
  }, []);

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
