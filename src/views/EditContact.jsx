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

    useEffect(()=>{
        //asignamos un objeto contacto ala variable que coincida con el id seleccionado y establecio en la url
        const contactToEdit = store.meseros.find(c => c.id === parseInt(id)); 
        if (contactToEdit){
            setContact(contactToEdit);//establece los campos con los valores del objeto contacto/mesero
        }
    },[id, store.meseros]); //es requerido usar las dependencias con las qu se interactuan para obtener el contacto correcto en base a la url
    //se implementa 'store.meseros' para obtener todos los meseros en caso de que se actualicen los meseros desde algun otro lugar desde la aplicacion


    //actualiza el estado contact con los nuevos valores que se ingresan en el formulario
    const handleChange = (event) =>{
        //name es el  atributo name del campo del formulario
        //value es el valor actual del campo del formulario
        const {name, value} = event.target; //event contiene informacion sobre el campo qie cambió y su valor, 'event.target' es el elemento  que disparo el evento 
        setContact({
            ...contact, //spread operator 
            [name]: value
        });
    };
}

export default EditContact;