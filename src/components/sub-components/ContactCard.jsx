import React from "react";

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
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            <ul>
                <li>{props.phone}</li>
                <li>{props.email}</li>
                <li>{props.address}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;