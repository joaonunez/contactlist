import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/Context";

export const AddContact = () => {
  const state = useContext(Context);
  useEffect(() =>{
    state.actions.getContacts();
  },[])
    return (
      <div className="container mt-5 col-xxl-3">
        
        <h2 className="text-center">Añadir Contacto</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Ingresa El Nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa Correo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefono</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Ingresa Teléfono"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Direccion</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Ingresa Direccion"
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
  
  