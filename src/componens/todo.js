function todo (props) {

    const mover = () => {
        const newDone = {title: props.tarea.title, category: props.tarea.category, description: props.tarea.description}
        props.agregarDone(newDone)
    } 

    return (
        <div className="tarea-container">
 
            <div className="tarea-title">
                <p>{props.tarea.title}</p>
            </div>
            
            <div className="tarea-category">
                <p>{props.tarea.category}</p>
            </div>

            <div className="tarea-descrip">
                <p>
                    {props.tarea.description}
                </p>
            </div>

            <button onClick={mover} >DONE</button>
        </div>
    )
}

export default todo;









/* import React, { Component } from 'react';

export default class Todo extends Component {

    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.tareas)
        return this.props.tareas.map( tarea => {
            return (
                <div className="tarea-container"> 
                    <div className="tarea-title">
                        <p>{tarea.title}</p>
                    </div>
                    
                    <div className="tarea-category">
                        <p>{tarea.category}</p>
                    </div>

                    <div className="tarea-descrip">
                        <p>
                            {tarea.description}
                        </p>
                    </div>

                    <button>DONE</button>
                </div>
            )
        });
    }
} */
/* const todo = props => (

    return (
    <div className="tarea-container"> 
        <div className="tarea-title">
            <p>{props.tarea.title}</p>
        </div>
        
        <div className="tarea-category">
            <p>{props.tarea.category}</p>
        </div>

        <div className="tarea-descrip">
            <p>
                {props.tarea.description}
            </p>
        </div>

        <button>DONE</button>
    </div>
    )
)


export default todo */