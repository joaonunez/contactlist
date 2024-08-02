import React, {useContext, useEffect, useState,} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/Context"
const EditContact = () =>{
    const {actions, store } = useContext(Context)
    const {id} = useParams(); //con esta variable se obtiene el id del contacto apart de la url
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        name:"",
        email:"",
        phone:"",
        address:""
    });
}

export default EditContact;