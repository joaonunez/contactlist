import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ContactList } from "./components/ContactList";
import { AddContact }  from "./components/AddContact";

function App() {
  return (
    <>
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Contact List</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                
                <Link  className="nav-link active btn btn-info" to={"/AddContact"} >Añadir Nuevo Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ContactList/>} ></Route>
        <Route path="/AddContact" element={<AddContact/>} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
