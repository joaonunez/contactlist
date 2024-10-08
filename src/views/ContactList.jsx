
import React, { useEffect, useContext } from "react";
import { Context } from "../store/Context";
import ContactCard from "../components/ContactCard";

export function ContactList() {
  const {actions,store} = useContext(Context);

  useEffect(() => {
    actions.getContacts();
  }, []);
  return (
    <>
      <h1 className="text-center"> Lista De Meseros</h1>
      <div className="contenedor-full-meseros">
        <div className="mesero-container col-xxl-10">
          {store.meseros.length > 0 ? (
            store.meseros.map((contact) => (
              <ContactCard
                key={contact.id}
                image={`https://rickandmortyapi.com/api/character/avatar/${contact.id}.jpeg`}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                address={contact.address}
                id={contact.id}
                delete={actions.deleteContacts}
              />
            ))
          ) : (
            <p>No Hay Resultados.</p>
          )}
        </div>
      </div>
    </>
  );
}
