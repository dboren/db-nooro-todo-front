'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import TaskCard from './ui/TaskCard';

export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from back-end
    axios.get('http://localhost:8080/api/v1/task/getall').then((res) => setTasks(res.data));
  }, []);

  console.log(JSON.stringify(tasks));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Link href="/task-form/new-task-form">
              <button>Create Task</button>
            </Link>
          <p>Placeholder for total tasks counter</p>
          <p>Placeholder for completed task counter</p>
          <p>Create tasks and organize your to-do items</p>
    </div>
  );
}
