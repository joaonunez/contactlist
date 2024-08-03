import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ContactList } from "./views/ContactList";
import { AddContact }  from "./views/AddContact";
import { NavBar } from "./components/NavBar";
import injectContext from "./store/Context";
import EditContact from "./views/EditContact";
function App() {
  return (
    <>
    
    <Router>
      <NavBar/>
      <Routes>
        {/*Rutas del proyecto*/}
        <Route path="/" element={<ContactList/>} />
        <Route path="/AddContact" element={<AddContact/>} />
        <Route path="/EditContact/:id" element={<EditContact />} /> 
      </Routes>
    </Router>
    </>
  );
}

export default injectContext(App);
