import { useContext, useState } from "react";
import React from "react";
import { useBoard, BoardContext } from "../BoardContext";
import Column from "./Column";
import TrashBin from "./TrashBin";

function TaskInput() {
  const { dispatch } = useContext(BoardContext);
  const [text, setTask] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TASK", payload: { text } });
    setTask("");
  };

  return (
    <form onSubmit={handleClick} className="w-full flex justify-center mb-8 z-10">
      <input
        type="text"
        value={text}
        onChange={(e) => setTask(e.target.value)}
        className="task bg-black/30 text-white font-extrabold w-72 p-3 
        rounded-xl shadow-lg border-2 border-white/40 focus:outline-none 
        focus:border-white focus:ring-2 focus:ring-purple-500 placeholder:text-white/70"
        placeholder="Enter the task"
      />
      <button
        type="submit"
        className="ml-3 px-6 py-3 rounded-xl font-bold text-white 
        bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 
        shadow-[0_0_15px_rgba(255,0,255,0.6)] hover:shadow-[0_0_25px_rgba(255,0,255,0.9)] 
        transition duration-300"
      >
        ADD
      </button>
    </form>
  );
}

export default function Board() {
  const { state } = useBoard();

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 
        bg-[linear-gradient(270deg,#0f0c29,#302b63,#24243e,#000000,#1e1e2f,#0f0c29)] 
        animate-gradient-slide">
      </div>

      
      <div className="relative z-10 w-full flex flex-col items-center pt-10">
        <h1 className="text-6xl font-extrabold mb-8 text-transparent bg-clip-text 
          bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 
          drop-shadow-[0_0_25px_rgba(255,0,255,0.6)]">
          Task Board
        </h1>

        <TaskInput />

        <div className="flex gap-6 flex-wrap justify-center w-full px-4">
          {Object.values(state.column).map((col) => (
            <Column key={col.id} Column={col} />
          ))}
          <TrashBin />
        </div>
      </div>
    </div>
  );
}
