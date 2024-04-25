import React from "react";
import { dila } from "../database/databaze";

const Lavra = () => {
  return (
    <>
      <h1 className="uvodRozbor">Hamlet</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[3].dilo}</div>
        </div>

        <div className="obsahdila obLavra"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auLavra"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[3].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Lavra;
