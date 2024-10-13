import React from 'react';
import ReactDOM from 'react-dom/client';

//import HelloWorldApp from './HelloWorldApp';
// import HelloWorldApp from './HelloWorldApp';
import './styles.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title='Hola, Soy Milton' /> */}
        <CounterApp value={20}/>
    </React.StrictMode>
);