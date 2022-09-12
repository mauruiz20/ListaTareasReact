import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <h1 className='titulo-principal'>Lista de Tareas</h1>
      <div className='tareas-lista-principal'>
        <h1 className='titulo-tareas'>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>    
  );
}

export default App;
