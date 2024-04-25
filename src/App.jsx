import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

// Styles
import "./styles.css";
import "./components/Menu/navbar.css";
import "./components/ObsahDila/fon.css";
import "./components/ObsahDila/obsah.css";
import "./components/DolniCast/foter.css";
import "./styles/dila/medea.css";
import "./pages/kontakt/napsat.css"

// JSX
import Navbar from "./components/Menu/Navbar";
import Homepage from "./pages/homepage/domaci";
import Osumnacty from "./pages/osumnacty/osumnactyStoleti";
import Devatenacty from "./pages/devatenacty/devatenactyStoleti";
import Dvadcaty from "./pages/dvadcaty/dvadcatyStoleti";
import DvadcatyCesko from "./pages/dvadcatyCesko/dvadcatyStoletiCesko";
import Spodek from "./components/DolniCast/Footer";
import Medea from "./pages/osumnacty/dila/Medea";
import Romeo from "./pages/osumnacty/dila/Romeo";
import Lakomec from "./pages/osumnacty/dila/Lakomec";
import Hamlet from "./pages/osumnacty/dila/Hamlet";
import Bridel from "./pages/osumnacty/dila/Bridel";
import Kulicka from "./pages/devatenacty/dila/Kulicka";
import Pes from "./pages/devatenacty/dila/Pes";
import Maj from "./pages/devatenacty/dila/Maj";
import Lavra from "./pages/devatenacty/dila/Lavra";
import Fahrenheit from "./pages/dvadcaty/dila/Fahrenheit";
import Farma from "./pages/dvadcaty/dila/Farma";
import Let from "./pages/dvadcaty/dila/Let";
import Princ from "./pages/dvadcaty/dila/Princ";
import Starec from "./pages/dvadcaty/dila/Starec";
import Hordubal from "./pages/dvadcatyCesko/dila/Hordubal";
import Krysar from "./pages/dvadcatyCesko/dila/Krysar";
import Maminka from "./pages/dvadcatyCesko/dila/Maminka";
import Nemoc from "./pages/dvadcatyCesko/dila/Nemoc";
import Rur from "./pages/dvadcatyCesko/dila/Rur";
import Pet from "./pages/dvadcatyCesko/dila/Pet";
import ScrollToTop from "./components/scroll";
import { ContactUs } from "./pages/kontakt/ContactUs";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main></main>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/osumnactyStoleti" element={<Osumnacty />} />
          <Route path="/devatenactyStoleti" element={<Devatenacty />} />
          <Route path="/dvadcatyStoleti" element={<Dvadcaty />} />
          <Route path="/dvadcatyStoletiCesko" element={<DvadcatyCesko />} />

          <Route path="/dila/Medea" element={<Medea />} />
          <Route path="/dila/Romeo" element={<Romeo />} />
          <Route path="/dila/Lakomec" element={<Lakomec />} />
          <Route path="/dila/Hamlet" element={<Hamlet />} />
          <Route path="/dila/Bridel" element={<Bridel />} />

          <Route path="/dila/Kulicka" element={<Kulicka />} />
          <Route path="/dila/Pes" element={<Pes />} />
          <Route path="/dila/Maj" element={<Maj />} />
          <Route path="/dila/Lavra" element={<Lavra />} />

          <Route path="/dila/Fahrenheit" element={<Fahrenheit />} />
          <Route path="/dila/Farma" element={<Farma />} />
          <Route path="/dila/Let" element={<Let />} />
          <Route path="/dila/Princ" element={<Princ />} />
          <Route path="/dila/Starec" element={<Starec />} />

          <Route path="/dila/Hordubal" element={<Hordubal />} />
          <Route path="/dila/Maminka" element={<Maminka />} />
          <Route path="/dila/Nemoc" element={<Nemoc />} />
          <Route path="/dila/Krysar" element={<Krysar />} />
          <Route path="/dila/Rur" element={<Rur />} />
          <Route path="/dila/Pet" element={<Pet />} />

          <Route path="/kontakt/ContactUs" element={<ContactUs />} />
        </Routes>

        <footer>
          <Spodek />
        </footer>
      </Router>
    </>
  );
}
