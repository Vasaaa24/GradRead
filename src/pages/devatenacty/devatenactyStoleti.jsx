import React from "react";
import { Link } from "react-router-dom";

const Devatenacty = () => {
  return (
    <>
      <div className="pozadiStoleti devatenactyS">
        <div className="generalStoleti">
          <span className="nadpisStoleti">19. století</span>
        </div>
      </div>
      <div className="rozdeleniStoleti"></div>
      <div className="fon dev">
        <Link to="/dila/Kulicka" className="pozadiKonteineru">
          <div className="autorKonteiner Kulicka"></div>
          <span className="popis">Kulička – Guy de Maupassant</span>
        </Link>

        <Link to="/dila/Pes" className="pozadiKonteineru">
          <div className="autorKonteiner Pes"></div>
          <span className="popis">Pes baskervillský – Arthur Conan Doyle</span>
        </Link>

        <Link to="/dila/Maj" className="pozadiKonteineru">
          <div className="autorKonteiner Maj"></div>
          <span className="popis">Máj – K.H.Mácha</span>
        </Link>

        <Link to="/dila/Lavra" className="pozadiKonteineru">
          <div className="autorKonteiner Lavra"></div>
          <span className="popis">Král Lávra - Borovský K. H.</span>
        </Link>
      </div>
    </>
  );
};

export default Devatenacty;
