'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskCard from './ui/TaskCard';

interface Task {
  id: string;
  title: string;
  color: string;
  completed: boolean;
  children: React.ReactNode;
}

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);

  const [deletionID, setDeletionID] = useState('');

  useEffect(() => {
    // Fetch tasks from back-end
    axios.get('http://localhost:8080/api/v1/task/getall').then((res) => setTasks(res.data));
  }, []);

  // console.log(JSON.stringify(tasks));

  // setting value of deletionID
    useEffect(() => {
      if (deletionID) {
        console.log('deletionId set to:', deletionID);
        deleteTask(deletionID);
      }
    }, [deletionID]);

  //task deletion function

  function deleteTask(deletionId: String) {


    // console.log("deletionId set to:", deletionID);



    axios
    .request({
      method: 'delete',
      url: `http://localhost:8080/api/v1/task/delete/${deletionId}`,
      data: { id: deletionId }, // Backend controller file needs this as a request body
    })
    .then((response) => {
      console.log('Resource deleted successfully:', response.data);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== deletionId)); //clear task from page
    })
    .catch((error) => {
      console.error('Error deleting resource:', error);
    });

  }


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Link href="/task-form/new-task-form">
              <button>Create Task</button>
            </Link>
            <ul className="block list-none">
                {tasks.map((task) => (
                    <li key={task.id}>
                          <TaskCard
                            title={task.title}
                            color={task.color}
                            completed={task.completed}>
                            {/* <h2>{task.title}</h2> */}
                            <button id={task.id} onClick={(event) => {
                                                            setDeletionID(task.id);
                                                            deleteTask(task.id);
                                                                      }
                                    }><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                            </button>
                          </TaskCard>
                      </li>
                  ))}
                </ul>
          <p>Placeholder for total tasks counter</p>
          <p>Placeholder for completed task counter</p>
          <p>Create tasks and organize your to-do items</p>
    </div>
  );
}
