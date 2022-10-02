import FavouriteSlipsList from './components/FavouriteSlipsList';
import AdviceSlip from "./components/AdviceSlip";
import { useEffect, useState } from "react";

function AdviceSection() {
  const [advice, setAdvice] = useState("");
  const [favoriteAdvice, setFavoriteAdvice] = useState([]);
  const [adviceGiven, setAdviceGiven] = useState(0);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.slip.advice);
      });
  }, [adviceGiven]);

  console.log(advice);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        <AdviceSlip
          advice={advice}
          setAdviceGiven={setAdviceGiven}
          setFavoriteAdvice={setFavoriteAdvice}
          favoriteAdvice={favoriteAdvice}
        />
      </section>
      <section className="favourtite-slips-list">
        <FavouriteSlipsList   favoriteAdvice={favoriteAdvice}  />
      </section>
    </section>
  );
}

export default AdviceSection;
