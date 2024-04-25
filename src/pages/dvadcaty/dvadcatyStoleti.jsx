import React from "react";
import { Link } from "react-router-dom";
const Dvadcaty = () => {
  return (
    <>
      <div className="pozadiStoleti dvadcatyS">
        <div className="generalStoleti">
          <span className="nadpisStoleti">20. a 21. století</span>
        </div>
      </div>
      <div className="rozdeleniStoleti"></div>
      <div className="fon dvad">
        <Link to="/dila/Let" className="pozadiKonteineru">
          <div className="autorKonteiner Hailey"></div>
          <span className="popis">Let do nebezpečí – Arthur Hailey</span>
        </Link>

        <Link to="/dila/Princ" className="pozadiKonteineru">
          <div className="autorKonteiner Princ"></div>
          <span className="popis">Malý princ – Antonie de Saint-Exupéry</span>
        </Link>

        <Link to="/dila/Farma" className="pozadiKonteineru">
          <div className="autorKonteiner Farma"></div>
          <span className="popis">Farma zvířat – George Orwell</span>
        </Link>

        <Link to="/dila/Fahrenheit" className="pozadiKonteineru">
          <div className="autorKonteiner Bradbury"></div>
          <span className="popis">451 stupňů Fahrenheita - Bradbury R. D</span>
        </Link>

        <Link to="/dila/Starec" className="pozadiKonteineru">
          <div className="autorKonteiner Starec"></div>
          <span className="popis">Stařec a moře - Hemingway E.</span>
        </Link>
      </div>
    </>
  );
};

export default Dvadcaty;
