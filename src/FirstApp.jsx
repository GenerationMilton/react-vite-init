import PropTypes from "prop-types";
//const newMessage= true;
//const newMessage= "hola"
//const newMessage= [1,2,3,4,5,6,7,8,9];

//Print objects in functional component
const newMessage={
    message: 'Hola Mundo',
    title:'Milton'
}

//function in react
const getResult  =(a,b)=>{
    return a+b;
}

//si se quiere imprimir el objeto se serializac con JSON.stringify

//Fragmento agrupador de codigo jsx <> tienen un nodo padre
//Por lo menos un nodo padre y devolver los elementos que se necesiten
export const FirstApp = ({ title, subtitle }) => {

    //console.log(props);

  return (
    <>
        <h1>{ title }</h1>
        {/* <h1>{getResult(5,5)}</h1> */}
        {/* <h1>Hola Mundo</h1> */}
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>{subtitle}</p>
    </>
    
  )
}

FirstApp.PropTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

// export default FirstApp
