const getState = ({ getActions, getStore, setStore}) =>{
  return{
    store:{
      saludo: "Hola ajajaxd"
    },
    actions:{
      actualizarSaludo:(nuevoSaludo) => {
        setStore({
          saludo: nuevoSaludo,
        });
      },
    },
  };
};

export default getState