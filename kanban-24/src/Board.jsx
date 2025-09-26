import React, { useState } from "react";

export default function Board() {
  const [task, setTask] = useState("");
  const [columns, setColumns] = useState({
    todo: [],
    inprogress: [],
    done: [],
    deleted: [],
  });

  const addTask = () => {
    if (task.trim() === "") return;
    setColumns({ ...columns, todo: [...columns.todo, task] });
    setTask("");
  };

  const moveTask = (task, from, to) => {
    setColumns({
      ...columns,
      [from]: columns[from].filter((t) => t !== task),
      [to]: [...columns[to], task],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 p-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8 drop-shadow-lg animate-spin">
        📋Kanban Board
      </h1>

      <div className="flex gap-2 mb-6 w-full max-w-lg">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"/>
        <button
          onClick={addTask}
          className="px-4 py-2 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 active:scale-95 transition">
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">

        <Column
          title="To Do"
          color="bg-blue-100"
          tasks={columns.todo}
          onNext={(t) => moveTask(t, "todo", "inprogress")}/>

        <Column
          title="In Progress"
          color="bg-yellow-100"
          tasks={columns.inprogress}
          onNext={(t) => moveTask(t, "inprogress", "done")}/>

        <Column
          title="Done"
          color="bg-green-100"
          tasks={columns.done}
          onNext={(t) => moveTask(t, "done", "deleted")}/>

        <Column
          title="Deleted"
          color="bg-red-100"
          tasks={columns.deleted}
          hideNext/>
      </div>
    </div>
  );
}

function Column({ title, color, tasks, onNext, hideNext }) {
  return (
    <div
      className={`${color} rounded-xl shadow-xl p-4 min-h-[200px] transition hover:scale-105`}
    >
      <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
        {title}
      </h2>
      <div className="space-y-3">
        {tasks.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-2 flex justify-between items-center shadow hover:shadow-lg transition-all duration-200"
          >
            <span className="text-gray-700">{t}</span>
            {!hideNext && (
              <button
                onClick={() => onNext(t)}
                className="text-sm bg-purple-500 text-white px-2 py-1 rounded-lg hover:bg-purple-600 transition"
              >
                ➡
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
