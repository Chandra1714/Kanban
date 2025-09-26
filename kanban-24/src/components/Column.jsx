import React from "react";
import Tasks from "./Tasks";
import { useBoard } from "../BoardContext";

export default function Column({ Column }) {
  const { dispatch } = useBoard();

  const handleDrop = (e) => {
    const task = e.dataTransfer.getData("task");
    const sourcecol = e.dataTransfer.getData("sourcecol");
    if (task && sourcecol !== Column.id) {
      dispatch({
        type: "Move-Task",
        payload: { sourcecol, targetCol: Column.id, task },
      });
    }
  };

  const columnStyles = {
  todo: `
    bg-white/10 border-pink-400
    shadow-[0_0_25px_rgba(255,0,150,0.5)]
    hover:shadow-[0_10px_20px_rgba(255,0,200,0.9)]
    backdrop-blur-xl backdrop-saturate-200  `,
  progress: `
    bg-white/10 border-cyan-300
    shadow-[0_0_25px_rgba(0,200,255,0.5)]
    hover:shadow-[0_10px_20px_rgba(91,255,255,0.9)]
    backdrop-blur-xl backdrop-saturate-200`,
  done: `
    bg-white/10 border-emerald-300
    shadow-[0_0_25px_rgba(0,255,150,0.5)]
    hover:shadow-[0_10px_20px_rgba(0,255,200,0.9)]
    backdrop-blur-xl backdrop-saturate-200`,
};

  return (
    <div
      className={`w-64 min-h-[320px] rounded-2xl p-4 border-4 flex flex-col items-center 
                 transition-transform duration-500 ${columnStyles[Column.id]}`}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}>
      <h2 className="text-2xl font-semibold mb-4 text-white text-glow animate-[glow_5s_ease-in-out_infinite]">
  {Column.title}
</h2>
      <div className="flex flex-col gap-2 w-full">
        {Column.tasks.map((task) => (
          <Tasks key={task} task={task} sourcecol={Column.id} />
        ))}
      </div>
    </div>
  );
}
