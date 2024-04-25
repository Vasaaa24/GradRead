import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

export const ContactUs = () => {
  const form = useRef();
  const jmeno = useRef();
  const posta = useRef();
  const zprava = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (jmeno.current.value !== "" && posta.current.value !== "" && zprava.current.value !== "") {
      emailjs
        .sendForm("service_xeklzjk", "template_r1zurmu", form.current, {
          publicKey: "fhRLeLb_nesTphVdE",
        })
        .then(
          () => {
            toast.success("Zpráva byla odeslána");
            jmeno.current.value = "";
            posta.current.value = "";
            zprava.current.value = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      toast.error("Vyplňte všechna pole");
    }
  };

  return (
    <>
      <div className="okraje">
        <form ref={form} onSubmit={sendEmail} className="fonNapsat">
          <label className="mailPokyny">Kontakt</label>
          <input ref={jmeno} type="text" className="zapis" name="from_name" placeholder=" Jméno"/>
          <input ref={posta} type="email" className="zapis emailCast" name="from_email" placeholder="Email" />
          <textarea ref={zprava} name="message" className="zprava" placeholder="Zpráva..."/>
          <input type="submit" className="poslat" value="Poslat" />
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};
