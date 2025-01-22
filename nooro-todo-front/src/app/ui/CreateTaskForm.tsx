import React, { useState } from 'react';

const CreateTaskForm = () => {

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      try {
        const response = await fetch('http://localhost:8080/api/v1/task/create', {
          method: 'POST',
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
          alert("error while submitting task")
        }
      } catch (error) {
        alert("error while submitting task")
      }
    };

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <label className="block text-blue-500 font-bold">
        Title:
        <input 
        className="bg-white"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <label className="block text-blue-500 font-bold">
        Color:
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
      </label>
      <button className="block bg-blue-500 rounded-md text-white" type="submit">Add Task</button>
    </form>
  );
};

export default CreateTaskForm;