import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({tasks, setTasks, data, setData, editing, setEditing, id}) => {

  const [error, setError] = useState('')

  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const { name, task } = data

  const onSubmit = e => {
    e.preventDefault()

    if(name.trim() === '') {
      setError('Cant send any empty fields')
      setTimeout(() => {
        setError('')
      }, 3000);
      return
    }

    if(task.trim() === '' || task.length < 5) {
      setError('The task cannot be empty and must be greater than 5 characters')
      setTimeout(() => {
        setError('')
      }, 3000);
      return
    }

    if(!editing) {
      setTasks([
        ...tasks,
        {id: uuidv4(), name, task}
      ])
    } else {
      setTasks([
        {id, name, task}
      ])
      setEditing(false)
    }

    setData({
      name: '',
      task: ''
    })
  }

  return (
    <form
      className="card card-body"
      onSubmit={onSubmit}
    >
      {
        error ? (
          <div className="alert alert-danger">
            {error}
          </div>
        ) : null
      }
      <div className="form-group">
        <input 
          type="text" 
          name="name" 
          className="form-control"
          placeholder="Name"
          onChange={onChange}
          value={name}
          autoFocus
        />
      </div>
      <div className="form-group">
        <textarea 
          name="task" 
          id="" 
          cols="30" 
          rows="10"
          className="form-control"
          placeholder="Task"
          onChange={onChange}
          value={task}
          ></textarea>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-block"
      >{ editing ? 'Edit' : 'Create' }</button>
    </form>
  );
};

export default Form;
