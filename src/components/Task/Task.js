import React from 'react'

const Task = ({tasks, setTasks, setEditing, setId, setData}) => {
    
    
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    
    const editTask = (task) => {
        setData({
            name: task.name,
            task: task.task
        })
        setId(task.id)
        setEditing(true)
    }
    
    

    return (
        <table
            className="table table-striped"
        >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.name}</td>
                            <td>{task.task}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => editTask({...task})}
                                    className="btn btn-secondary btn-sm btn-block"
                                >Edit</button>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-sm btn-block"
                                    onClick={() => deleteTask(task.id)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Task
