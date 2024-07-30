
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
    },
  };
};

export default getState