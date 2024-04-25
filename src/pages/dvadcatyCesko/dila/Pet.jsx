import React from "react";
import { dila } from "../database/databaze";

const Pet = () => {
  return (
    <>
      <h1 className="uvodRozbor">Bylo nás pět</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[5].dilo}</div>
        </div>

        <div className="obsahdila obPet"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auPet"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[5].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Pet;
