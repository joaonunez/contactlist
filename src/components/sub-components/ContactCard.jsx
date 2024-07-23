import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {faPen} from "@fortawesome/free-solid-svg-icons"

const ContactCard = (props) => {
  return (
    <div className="">
      <div
        key={props.id}
        className="card"
        style={{ width: "18rem" }}
      >
        <img src={props.image} className="card-img-top foto" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.name}</h5>
            <ul className="card-text lista-datos">
                <li>{props.phone}</li>
                <li>{props.email}</li>
                <li>{props.address}</li>
            </ul>
            <div className="d-flex flex-row justify-content-center contenedor-botones">
            <button className="btn btn-success"><FontAwesomeIcon icon={faPen} /></button>
            <button className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;