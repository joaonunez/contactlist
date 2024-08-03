import React from "react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const ContactCard = (props) => {
  const navigate = useNavigate(); //inicializa navigate para el uso de la navegacion

  // Función para manejar la edición del contacto
  const handleEdit = () => {
    navigate(`/EditContact/${props.id}`); // redirige al componente de edicion con el id del contacto en la url
  };

  return (
    <div className="">
      <div
        key={props.id}
        className="card"
        style={{ width: "30rem" }}
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
            <button className="btn btn-success" onClick={handleEdit}>
              <FontAwesomeIcon icon={faPen} />
            </button> 
            <button className="btn btn-danger" onClick={() => props.delete(props.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button> 
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
