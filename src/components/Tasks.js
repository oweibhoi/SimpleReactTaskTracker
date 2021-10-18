import Task from './Task';

const Tasks = ({tasks, onDeleteTask, remindTask}) => {
    return (
        <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDeleteTask={onDeleteTask} remindTask={remindTask} />
        ))}
        </>
    )
}

export default Tasks;