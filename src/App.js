import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo from './hooks/Ejemplo';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OpcionalRender from './components/pure/opcionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*componente propio greeting}*/}
        {/* <Greeting name={"Martin"}></Greeting> */}
        {/* componente de ejemplo funcional */}
        {/* <GreetingF name = "martin"></GreetingF> */}
        {/* componente de listado de tareas */}
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo></Ejemplo> */}
        {/*  */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
        {/* <Ejemplo4 nombre='Martín'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name= "Martin"></GreetingStyled> */}
      {/*</header>*/}
      {/*GESTION DE EVENTOS */}
      {/* <Father></Father> */}
      {/* Ejemplos de renderizado condicional */}
      {/* <OpcionalRender></OpcionalRender> */}

      {/* ejemplos uso formik y yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/*<RegisterFormik></RegisterFormik>*/}

      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
