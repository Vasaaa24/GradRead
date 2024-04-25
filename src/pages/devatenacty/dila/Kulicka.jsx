import React from "react";
import { dila } from "../database/databaze";

const Kulicka = () => {
  return (
    <>
      <h1 className="uvodRozbor">Kulička</h1>
      <div className="fonObsahuDila">
        <div className="obsahdila textcast">
          <span className="nadpisRozbor">Rozbor díla :</span>
          <div className="textRozbor">{dila[0].dilo}</div>
        </div>

        <div className="obsahdila obKulicka"></div>
        <div className="rozdeleni"></div>
        <div className="obsahdila auKulicka"></div>

        <div className="obsahdila textcast">
          <span className="nadpisRozbor">O autorovi :</span>
          <div className="textRozbor">{dila[0].autor}</div>
        </div>
      </div>
    </>
  );
};

export default Kulicka;
