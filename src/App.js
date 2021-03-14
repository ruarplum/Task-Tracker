import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors appnt',
      day: '5th Feb at 1430',
      reminder: true,
    },
    {
      id: 2,
      text: 'School meeting',
      day: '6th Feb at 1600',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shop',
      day: '5th Feb at 1430',
      reminder: false,
    },
  ])

  // Delete Task function
  const deleteTask = (id) => {
    // console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task
    )
    )
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks}
        onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
          'No Tasks to Show'
        )}
    </div>
  );
}

export default App;
