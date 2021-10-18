import { useState } from 'react';
import Header from './components/Header';
import AddButton from './components/AddButton';
import './App.css';
import './css/Bootstrap.min.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [addButton, setAddButton] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Text 1',
      day: '02/09/2021 19:98:00',
      reminder: true,
    },
    {
      id:2,
      text: 'Text 2',
      day: '02/03/2021 19:98:00',
      reminder: true,
    },
    {
      id:3,
      text: 'Text 3',
      day: '02/09/2021 19:98:00',
      reminder: false,
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const reminderTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const onAddButton = (addbutton) => {
    setAddButton(addbutton)
  }

  return (
    <div className="container mt-5 pb-5">
      <div className="container pr-5 pl-5">
        <Header/>
        <div className="card mr-5 ml-5">
            <div className="card-header">
            <AddButton addButton={addButton} onAddButton={onAddButton} />
            </div>
            <div className="card-body">
              { addButton && <AddTask addTask={addTask}></AddTask>}
              { tasks.length > 0 ? <Tasks key={tasks.id} tasks={tasks} onDeleteTask={deleteTask} remindTask={reminderTask}/> : 'No Task to show.'}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
