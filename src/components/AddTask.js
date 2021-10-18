import { useState } from 'react'

const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please add task.')
            return
        }

        addTask({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="p-5" onSubmit={onSubmit}>
            <h3 className="w-100 text-center mb-4">Adding Task</h3>
            <label>Task:</label>
            <input type="text" className="form-control mb-2" placeholder="Add Task"
            value={text} onChange={(e) => setText(e.target.value)}></input>
            <label>Day & Time:</label>
            <input type="text" className="form-control mb-2" placeholder="Add Day & Time"
            value={day} onChange={(e) => setDay(e.target.value)}></input>
            <input type="submit" className="btn btn-primary form-control mb-2" value="Add Task"></input>
            <input type="checkbox"
            value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>&nbsp;<span>Set reminder</span>
        </form>
    )
}

export default AddTask