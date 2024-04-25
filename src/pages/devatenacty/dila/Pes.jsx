import React from "react";
import { dila } from "../database/databaze";

const Pes = () => {
  return (
    <>
      <h1 className="uvodRozbor">Pes baskervillský</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[1].dilo}</div>
        </div>

        <div className="obsahdila obPes"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auPes"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[1].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Pes;
