import React from "react";
import { dila } from "../database/databaze";

const Fahrenheit = () => {
  return (
    <>
      <h1 className="uvodRozbor">451 stupňů Fahrenheita</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[3].dilo}</div>
        </div>

        <div className="obsahdila obFahrnheit"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auFahrnheit"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[3].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Fahrenheit;
