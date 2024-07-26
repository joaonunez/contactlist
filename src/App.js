import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ContactList } from "./views/ContactList";
import { AddContact }  from "./views/AddContact";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ContactList/>} ></Route>
        <Route path="/AddContact" element={<AddContact/>} ></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
