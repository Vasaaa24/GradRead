import { Link } from "react-router-dom";
import React from "react";

const Osumnacty = () => {
  return (
    <>
      <div className="pozadiStoleti osumnactyS">
        <div className="generalStoleti">
          <span className="nadpisStoleti">18. století</span>
        </div>
      </div>
      <div className="rozdeleniStoleti"></div>
      <div className="fon osm">
        <Link to="/dila/Medea" className="pozadiKonteineru">
          <div className="autorKonteiner Media"></div>
          <span className="popis">Médea - Eurípidés ze Salamíny</span>
        </Link>

        <Link to="/dila/Romeo" className="pozadiKonteineru">
          <div className="autorKonteiner Romeo"></div>
          <span className="popis">Romeo a Julie – W.Shakespeare</span>
        </Link>

        <Link to="/dila/Lakomec" className="pozadiKonteineru">
          <div className="autorKonteiner Lakomec"></div>
          <span className="popis">Lakomec - Molière</span>
        </Link>

        <Link to="/dila/Hamlet" className="pozadiKonteineru">
          <div className="autorKonteiner Hamlet"></div>
          <span className="popis">Hamlet - Shakespeare William</span>
        </Link>

        <Link to="/dila/Bridel" className="pozadiKonteineru">
          <div className="autorKonteiner Bridel"></div>
          <span className="popis"> Co Bůh? Člověk? - Bridel B.</span>
        </Link>
      </div>
    </>
  );
};

export default Osumnacty;
