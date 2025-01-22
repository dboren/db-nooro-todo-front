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

  const [tasks, setTasks] = useState<Task[]>([]);   //state for task pulled from database
  const [selectedCard, setSelectedCard] = useState<string | null>(null); // Declare selectedCard state

  useEffect(() => {
    // Fetch tasks from back-end
    axios.get('http://localhost:8080/api/v1/task/getall').then((res) => setTasks(res.data));
  }, []);

  console.log(JSON.stringify(tasks));

  console.log('Selected Card ID:', selectedCard);

  const handleClick = (cardId: string) => {
    setSelectedCard(cardId);
    console.log('Selected Card ID:', selectedCard);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Link href="/task-form/new-task-form">
              <button>Create Task</button>
            </Link>
            <ul className="block list-none">
                {tasks.map((task) => (
                    <li key={task.id} onClick={() => handleClick(task.id)} className="cursor-pointer">
                        <Link href="/task-form/edit-task-form">
                          <TaskCard
                            title={task.title}
                            color={task.color}
                            completed={task.completed}>
                            <h2>{task.title}</h2>
                          </TaskCard>
                        </Link>
                      </li>
                  ))}
                </ul>
          <p>Placeholder for total tasks counter</p>
          <p>Placeholder for completed task counter</p>
          <p>Create tasks and organize your to-do items</p>
    </div>
  );
}
