import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import ContactCard from "../components/ContactCard";
import defaultimage from "../imagenes/hombre.png";

export function ContactList() {
  const [contactArray, setContact] = useState([]);
  const state = useContext(Context)
  const getContact = () => {
    fetch("https://playground.4geeks.com/contact/agendas/meseros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.contacts && Array.isArray(data.contacts)) {
          setContact(data.contacts);
        } else {
          console.error("Unexpected data format:", data);
          setContact([]);
        }
      })
      .catch((error) => {
        console.log(error);
        setContact([]);
      });
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      <div className="contenedor-full-meseros">
        <h1>{state.store.saludo}</h1>
        <div className="mesero-container col-xxl-8">
          {contactArray.map((contact) => (
            <ContactCard
              key={contact.id}
              image={defaultimage}
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
              address={contact.address}
            ></ContactCard>
          ))}
        </div>
      </div>
    </>
  );
}
