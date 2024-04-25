import React from "react";
import { dila } from "../database/databaze";

const Starec = () => {
  return (
    <>
      <h1 className="uvodRozbor">Co bůh? Co člověk?</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[4].dilo}</div>
        </div>

        <div className="obsahdila obStarec"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auStarec"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[4].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Starec;
