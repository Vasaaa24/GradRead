import React from "react";
import { dila } from "../database/databaze";

const Medea = () => {
  return (
    <>
      <h1 className="uvodRozbor">Médea</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[0].dilo}</div>
        </div>

        <div className="obsahdila obMedea"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auMedea"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[0].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Medea;
