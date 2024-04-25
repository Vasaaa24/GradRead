import React from "react";
import { dila } from "../database/databaze";

const Bridel = () => {
  return (
    <>
      <h1 className="uvodRozbor">Co bůh? Co člověk?</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[4].dilo}</div>
        </div>

        <div className="obsahdila obBridel"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auBridel"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[4].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Bridel;
