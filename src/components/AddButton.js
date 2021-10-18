const AddButton = ({addButton, onAddButton}) => {

    const addTask = (e) => {
        onAddButton(!addButton)
    }
    return <button className={`btn ${addButton ? 'btn-danger': 'btn-primary' } float-right`} onClick={addTask}>{addButton ? 'CLOSE': 'ADD'}</button>
}

export default AddButton;