import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router'
import { ContactList } from "./components/ContactList";
function App() {
  return (
    <Router>
      <ContactList></ContactList>
      <Routes>
        <Route path="/" element></Route>
      </Routes>
    </Router>
  );
}

export default App;
