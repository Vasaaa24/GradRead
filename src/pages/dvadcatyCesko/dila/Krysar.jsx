import React from "react";
import { dila } from "../database/databaze";

const Krysar = () => {
  return (
    <>
      <h1 className="uvodRozbor">Krysař</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[1].dilo}</div>
        </div>

        <div className="obsahdila obKrysar"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auKrysar"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[1].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Krysar;
