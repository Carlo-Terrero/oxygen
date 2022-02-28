import React , {useState} from 'react';

import BarNav from './barNav';
import Footer from './footer';
import Todo from './todo';
import Done from './done';

function App(){

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Bajo')
  const [description, setDescription] = useState('')

  const [tareas, setTareas] = useState([
    {title: 'Primera tarea', category: "Urgente", description: "Se ha caido el servidor"},
    {title: 'Segunda tarea', category: "Media", description: "La impresora no funciona"}
    
  ])

  const [dones, setDones] = useState([
    {title: 'Tercera tarea', category: "Baja", description: "Actualizar el fichero"}
  ])

  const agregar = () => {
    setTareas([...tareas, {title: title, category: category, description: description}])
    setTitle('');
    setCategory('Bajo');
    setDescription('')
  }

  const agregarDone = (newDone) => {
    setDones([...dones, {title: newDone.title, category: newDone.category, description: newDone.description}])
    tareas.delete(newDone)
  }

  const devolverDone = (devolDone) => {
    setTareas([...tareas, {title: devolDone.title, category: devolDone.category, description: devolDone.description}])
  }

  function tareasPendientes() {
    return tareas.map(tarea => {

      return(
        <Todo 
          key={tarea.title.toString()}
          tarea={tarea}
          agregarDone={agregarDone}
        />
      )
    })
  }

  function tareasCumplidas() {
    return dones.map(done => {

      return(
        <Done 
          key={done.title.toString()}
          done={done}
          devolverDone={devolverDone}
        />
      )
    })
  }
  
  return (
    
    <div className="App">
      
      <BarNav/>
      <div className="Container-principal">
        
        <div className="Container-formu">
          <div className="title">
            <p>CREATE</p>
          </div>
        
          <div className="container-data">
            <div className="constainer-descrip">
              <div className='descrip'>
                Título
                <input
                  type="text"
                  name="title"
                  placeholder='Título de la tarea'
                  value={title}
                  onChange={ e => setTitle(e.target.value)}
                />
                </div>
              
              <div className='descrip'>
                Tags
                <select
                  name="category"
                  value={category}
                  onChange={ e => setCategory(e.target.value)}
                  
                >
                  <option value="Urgente">Urgente</option>
                  <option value="Medio">Medio</option>
                  <option value="Bajo">Bajo</option>
                  
                </select>
              
              </div>
            </div>

            <div className="container-area">
              Descripción
              <textarea
                type="text"
                name="description"
                placeholder="Descripción de la tarea"
                value={description}
                onChange={ e => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className='content-btn'>
            <button className='btn-form'  onClick={agregar}>Enviar</button>
          </div>

        </div>

        <div className="contariner-gestion">
          <div className="Container-formu">
            <div className='title'>
              <p>TO - DO</p>
            </div>
            
            {tareasPendientes()}
            
          </div>

          <div className="Container-no">
            <div className='title'>
              <p>DONE</p>
            </div>

            {tareasCumplidas()}
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
