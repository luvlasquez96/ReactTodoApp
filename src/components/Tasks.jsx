import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} onDelete={onDelete} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          No tasks available for this project.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 p-4 bg-stone-100 rounded-md">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.taskData}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
