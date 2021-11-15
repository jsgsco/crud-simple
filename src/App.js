import { Fragment, useState } from 'react'
import Form from './components/Form/Form'
import Navbar from './components/Navbar/Navbar'
import Task from './components/Task/Task';

function App() {

  const [data, setData] = useState({
    name: '',
    task: ''
  })
  const [tasks, setTasks] = useState([])
  const [editing, setEditing] = useState(false)
  const [id, setId] = useState(undefined)

  return (
    <Fragment>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <Form 
              data={data}
              setData={setData}
              tasks={tasks}
              setTasks={setTasks}
              editing={editing}
              setEditing={setEditing}
              setId={setId}
              id={id}
            />
          </div>
          <div className="col-md-6">
            <Task 
              setData={setData}
              tasks={tasks}
              setTasks={setTasks}
              setEditing={setEditing}
              setId={setId}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;