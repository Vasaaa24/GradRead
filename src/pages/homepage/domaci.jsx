import React from "react";
import { uvod } from "../../components/ObsahDila/dataObsah";
import knihy from "../../components/ObsahDila/img/books.webp";
import seznameni from "../../components/ObsahDila/img/kniha.webp"


const Homepage = () => {
  return (
    <>
      <div className="pozadiKnihy" loa>
      <img src={knihy} loading="lazy" className="obrazek"/>
        <div className="general">
          <span className="uvodNadpis">
            Vítejte na mém portálu maturitní četby!
          </span>
        </div>
      </div>
      <h1 className="uvodRozbor HlavniUvod">Úvod</h1>
      <div className="fonUvodu">
        <div className="seznameni text">
          <span className="nadpisSeznameni">O čem je Web ?</span>
          <p className="textAbout">{uvod[0].seznameni}</p>
        </div>
        <img src={seznameni} loading="lazy" className="seznameni Foto" />
      </div>
    </>
  );
};

export default Homepage;
