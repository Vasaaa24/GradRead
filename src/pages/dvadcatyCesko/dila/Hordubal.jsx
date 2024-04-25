import React from "react";
import { dila } from "../database/databaze";

const Hordubal = () => {
  return (
    <>
      <h1 className="uvodRozbor">Hordubal</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[4].dilo}</div>
        </div>

        <div className="obsahdila obHordubal"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auHordubal"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[4].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Hordubal;
