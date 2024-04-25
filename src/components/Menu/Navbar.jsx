import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  function getDropdown() {
    const dropdown = document.getElementById("dropdown");
    const PrvniB = document.getElementById("PrvniB");
    const DruhyB = document.getElementById("DruhyB");
    const TretiB = document.getElementById("TretiB");

    if (dropdown.style.display === "none") {
      dropdown.style.display = "flex";
      dropdown.style.animation = "goDropdown .5s ease forwards";
      DruhyB.style.display = "none";
      PrvniB.style.animation = "rotateAnimationPrvni .2s ease forwards";
      TretiB.style.animation = "rotateAnimationDruhy .2s ease forwards";
    } else {
      setTimeout(function () {
        dropdown.style.display = "none";
      }, 100);
      dropdown.style.animation = "outDropdown .5s ease forwards";
      setTimeout(function () {
        DruhyB.style.display = "flex";
      }, 50);
      PrvniB.style.animation = "rotateAnimationPrvniZpet .2s ease forwards";
      TretiB.style.animation = "rotateAnimationDruhyZpet .2s ease forwards";
    }
  }
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logoObject">
          <span className="logo">GradRead</span>
          <div className="logoImg"></div>
        </Link>
        <ul>
          <li>
            <Link to="/osumnactyStoleti" className="linkPrechod">
              18. století
            </Link>
          </li>
          <li>
            <Link to="/devatenactyStoleti" className="linkPrechod">
              19. století
            </Link>
          </li>
          <li>
            <Link to="/dvadcatyStoleti" className="linkPrechod">
              20. a 21. st
            </Link>
          </li>
          <li>
            <Link to="/dvadcatyStoletiCesko" className="linkPrechod">
              20. a 21.( ČR )
            </Link>
          </li>
        </ul>
        <Link to="/kontakt/ContactUs">
            <li className="Napsat">
             Napsat
             </li>
            </Link>
        <div className="pozadiBurger" id="prvniBurger" onClick={getDropdown}>
          <div className="burger PrvniB" id="PrvniB"></div>
          <div className="burger DruhyB" id="DruhyB"></div>
          <div className="burger TretiB" id="TretiB"></div>
        </div>
      </nav>
      <div className="dropdown" id="dropdown" style={{ display: "none" }}>
        <div className="pozadiDropdown">
          <Link to="/" className="dropdownLink" onClick={getDropdown}>Homepage
          </Link>
          <Link to="/osumnactyStoleti"className="dropdownLink"onClick={getDropdown}>18. století
          </Link>
          <Link to="/devatenactyStoleti"className="dropdownLink" onClick={getDropdown}>19. století
          </Link>
          <Link to="/dvadcatyStoleti"className="dropdownLink"onClick={getDropdown}>20. a 21. století
          </Link>
          <Link to="/dvadcatyStoletiCesko"className="dropdownLink"onClick={getDropdown}>20. a 21. století (ČR)
          </Link>
          <Link to="/kontakt/ContactUs"className="dropdownLink"onClick={getDropdown}>Kontakt
          </Link>
        </div>
      </div>
    </>
  );
}

// let navigate = useNavigate();

// function homepage() {
//   navigate('/');
// }
// function osumnacty() {
//   navigate('/osumnacty');
// }
// function devatenacty() {
//   navigate('/devatenacty');
// }
// function dvatcaty() {
//   navigate('/dvatcaty');
// }
// function dvadcatyCesko() {
//   navigate('/dvadcatyCesko');
// }
{
  /* <select name="obdobi"  className="vyber">
                <option value="homepage"  onClick={homepage}>Homepage</option>
                <option value="osumnacty" onClick={osumnacty} > 18. století</option>
                <option value="devatenacty" onClick={devatenacty}>19. století</option>
                <option value="dvadcaty" onClick={dvatcaty}>20. a 21. století ( svět )</option>
                <option value="dvadcatyCR" onClick={dvadcatyCesko}>20. a 21. století ( ČR )</option>
            </select> */
}
