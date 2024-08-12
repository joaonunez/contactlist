
const getState = ({ getActions, getStore, setStore}) =>{
  return{
    store:{
      info:{},
      meseros:[]
    },
    actions:{
      getContacts:() => {
        fetch("https://playground.4geeks.com/contact/agendas/meseros", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); 
            if (data.contacts && Array.isArray(data.contacts)) {
              setStore({
                info: data,
                meseros: data.contacts,
              });
            } else {
              console.error("Unexpected data format:", data);
              setStore({
                info: data,
                meseros: []
              });
            }
          })
          .catch((error) => {
            console.log(error);
            setStore({ meseros: [] });
          });
      },
      deleteContacts:(idContact) =>{
        fetch(`https://playground.4geeks.com/contact/agendas/meseros/contacts/${idContact}`,{
          method: "DELETE",
          headers:{
            "accept": "application/json"
          },
        })
          .then((response) => {
            if(response.status === 204){
              getActions().getContacts()
            }
          })
          .catch((error) => console.log("Error:", error.message));
      },
      createContacts: async (contact) => {
        try {
          const response = await fetch("https://playground.4geeks.com/contact/agendas/meseros", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(contact),
          });
      
          if (response.ok) {
            alert("Contacto Creado");
          } else {
            alert("Error al crear el contacto. Por favor, inténtalo de nuevo más tarde.");
          }
        } catch (error) {
          alert("No se pudo conectar con la API. Verifica tu conexión a internet o inténtalo más tarde.");
          console.error("Error al conectar con la API:", error);
        }
      },
      updateContact:(id, updatedContact) => {
        fetch(`https://playground.4geeks.com/contact/agendas/meseros/contacts/${id}`, {
          method: "PUT", 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedContact) 
        })
          .then((response) => response.json())
          .then((data) => {
            getActions().getContacts(); 
            console.log(data);
          })
          .catch((error) => console.error("Error:", error));
      }
    },
  };
};

export default getState;