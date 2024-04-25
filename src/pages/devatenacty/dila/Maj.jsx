import React from "react";
import { dila } from "../database/databaze";

const Maj = () => {
  return (
    <>
      <h1 className="uvodRozbor">Máj</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[2].dilo}</div>
        </div>

        <div className="obsahdila obMaj"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auMaj"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[2].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Maj;
