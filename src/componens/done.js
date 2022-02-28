function done (props) {

    const mover = () => {
        const newDone = {title: props.done.title, category: props.done.category, description: props.done.description}
        props.devolverDone(newDone)
    } 
 
    return (
        <div className="tarea-container">
            {console.log(props.done.id) }
            <div className="tarea-title">
                <p>{props.done.title}</p>
            </div>
            
            <div className="tarea-category">
                <p>{props.done.category}</p>
            </div>

            <div className="tarea-descrip">
                <p>
                    {props.done.description}
                </p>
            </div>

            <button className="btn" onClick={mover} >TO - DO</button>
        </div>
    )
}
 
 export default done;