import Link from 'next/link';

export default function Home() {
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
