import React from "react";
import { dila } from "../database/databaze";

const Farma = () => {
  return (
    <>
      <h1 className="uvodRozbor">Co bůh? Co člověk?</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[2].dilo}</div>
        </div>

        <div className="obsahdila obFarma"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auFarma"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[2].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Farma;
