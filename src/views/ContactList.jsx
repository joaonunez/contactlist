import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import ContactCard from "../components/ContactCard";
import defaultimage from "../imagenes/hombre.png";

export function ContactList() {
  const state = useContext(Context);
  
  useEffect(() => {
    state.actions.getContacts();
  });

  return (
    <>
      <div className="contenedor-full-meseros">
        <h1>{state.store.saludo}</h1>
        <div className="mesero-container col-xxl-8">
          {state.store.meseros.map((contact) => (
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
