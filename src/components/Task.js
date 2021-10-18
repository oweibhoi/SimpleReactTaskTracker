const Task = ({task, onDeleteTask, remindTask}) => {
    return (
        <div className={`border p-3 mb-2 ${ task.reminder ? 'bg-success text-white': '' }`}>
            <h4>
                <a href="#" className={task.reminder ? 'text-white':''}>{task.text} </a>
                <button onClick={() => onDeleteTask(task.id)} className="btn badge badge-danger float-right text-white">x</button>
                <button onClick={() => remindTask(task.id)} className="btn badge badge-success float-right text-white mr-1">R</button>
            </h4>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;