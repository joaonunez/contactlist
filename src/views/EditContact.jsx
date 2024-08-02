import React, {useContext, useEffect, useState,} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/Context"
const EditContact = () =>{
    const {actions, store } = useContext(Context)
    const {id} = useParams
}

export default EditContact;