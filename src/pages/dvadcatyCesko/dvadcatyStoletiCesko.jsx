import { Link } from "react-router-dom";

const DvadcatyCesko = () => {
  return (
    <>
      <div className="pozadiStoleti dvadcatyCRS">
        <div className="generalStoleti">
          <span className="nadpisStoleti">20. a 21. století ( ČR )</span>
        </div>
      </div>
      <div className="rozdeleniStoleti"></div>
      <div className="fon dvadCR">
        <Link to="/dila/Rur" className="pozadiKonteineru">
          <div className="autorKonteiner Rur"></div>
          <span className="popis">R.U.R – Karel Čapek</span>
        </Link>

        <Link to="/dila/Krysar" className="pozadiKonteineru">
          <div className="autorKonteiner Krysar"></div>
          <span className="popis">Krysař – Viktor Dyk</span>
        </Link>

        <Link to="/dila/Maminka" className="pozadiKonteineru">
          <div className="autorKonteiner Maminka"></div>
          <span className="popis">Maminka – Jaroslav Seifertl</span>
        </Link>

        <Link to="/dila/Nemoc" className="pozadiKonteineru">
          <div className="autorKonteiner Nemoc"></div>
          <span className="popis">Bílá nemoc – Karel Čapek</span>
        </Link>

        <Link to="/dila/Hordubal" className="pozadiKonteineru">
          <div className="autorKonteiner Hordubal"></div>
          <span className="popis">Hordubal – Karel Čapek</span>
        </Link>

        <Link to="/dila/Pet" className="pozadiKonteineru">
          <div className="autorKonteiner Pet"></div>
          <span className="popis">Bylo nás pět - Poláček K.</span>
        </Link>
      </div>
    </>
  );
};

export default DvadcatyCesko;
