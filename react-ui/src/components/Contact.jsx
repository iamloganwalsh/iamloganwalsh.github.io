import "../styles/Contact.css"
import mail from "../assets/mail.png"
import location_pin from "../assets/location-pin.png"
import phone from "../assets/phone.png"

import { useState } from "react";

const FormSpreeForm = () => {
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
  
    const form = e.target;
    const data = new FormData(form);
  
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
  
      const result = await res.json();
      console.log("Formspree response:", result);
  
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Formspree error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };
  

  return (
    <form
    action="https://formspree.io/f/xykkyvaz"
    method="POST"
    onSubmit={handleSubmit}
    >
        <div className="FormNameEmail">
            <input id="FormNameEmailName" name="name" required placeholder="Your name" />
            <input id="FormNameEmailEmail" type="email" name="email" required placeholder="Your email" />
        </div>
       
        <textarea name="message" required placeholder="Message" />

        <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send"}
        </button>

        {status === "success" && (
            <p className="success">Thanks! I’ll get back to you soon.</p>
        )}

        {status === "error" && (
            <p className="error">Something went wrong. Please reach out directly to loganwalshnz@gmail.com.</p>
        )}
    </form>
  );
};

export const Contact = () => {


    return (
        <section id="Contact">
            <div className="ContactLeft">
                <h2>Get in Touch</h2>
                
                <div className="ContactInfoLine">
                    <img src={mail} />
                    <p> loganwalshnz@gmail.com</p>
                </div>

                <div className="ContactInfoLine">
                    <img src={phone} />
                    <p>+64 275 926 303</p>
                </div>

                <div className="ContactInfoLine">
                    <img src={location_pin} />
                    <p> Auckland, New Zealand</p>
                </div>

            </div>

            <div className="ContactRight">
                <p>Send a Message</p>
                <FormSpreeForm />
            </div>
        </section>
    )
}