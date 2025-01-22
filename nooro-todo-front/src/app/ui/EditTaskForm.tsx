import { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  id: string;
  title: string;
  color: string;
  completed: boolean;
  children: React.ReactNode;
}


const EditTaskForm = () => {

    const [task, setTask] = useState<Task[]>([]);
    
    console.log("Current task in state:", task )

    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
      // Fetch tasks from back-end
      axios.get(`http://localhost:8080/api/v1/task/get/:${id}`).then((res) => setTask(res.data));
    }, []);

    console.log(task);
  
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:8080/api/v1/task/update:id', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, color }),
        });
  
        if (response.ok) {
          setSubmitted(true);
          setTitle('');
          setColor('');
        } else {
          alert("error while submitting changes")
        }
      } catch (error) {
        alert("error while submitting changes")
      }
    };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input 
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label>
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
      </label>
      <button type="submit">Save changes</button>
    </form>
  );
};

export default EditTaskForm;