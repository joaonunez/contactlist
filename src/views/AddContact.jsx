import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";

export const AddContact = () => {
  const {actions} = useContext(Context);
  const [contact, setContact] = useState({
    name:"",
    email:"",
    phone:"",
    address:""
  });

  const handleChange = (event) =>{
    const {name,value} = event.target;
    setContact({
      ...contact,
      [name]: value
      
    })
    console.log([name,value])
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    actions.createContacts(contact)
  };
  
  useEffect(() =>{
    actions.getContacts();
  },[])
    return (
      <div className="container mt-5 col-xxl-3">
        
        <h2 className="text-center">Añadir Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Ingresa El Nombre"
              name="name"
              value={contact.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa Correo"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Ingresa Teléfono"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Direccion</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Ingresa Direccion"
              name="address"
              value={contact.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3">Guardar Contacto</button>
          <p className="text-center mt-3">
            <Link to={"/"}>Volver Al Contact List</Link>
          </p>
        </form>
      </div>
    );
  };
  
  