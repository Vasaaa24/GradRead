import React from "react";
import { dila } from "../database/databaze";

const Rur = () => {
  return (
    <>
      <h1 className="uvodRozbor">R.U.R – Karel Čapek</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[0].dilo}</div>
        </div>

        <div className="obsahdila obRur"></div>
        <div className="rozdeleni"></div>

        <div className="obsahdila auRur"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[0].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Rur;
