import React from "react";

export default function Tasks({ task, sourcecol }) {
  const dragStart = (e) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("sourcecol", sourcecol);
  };

  return (
    <div
      className="task bg-black/95 text-white font-bold w-full p-3 rounded-lg border-2 border-gray-300 shadow-md cursor-grab 
      transition-transform duration-300  hover:shadow-[0_10px_15px_rgba(255,0,200,0.5)]
      animate-float-fast"
      draggable
      onDragStart={dragStart}>
      {task}
    </div>
  );
}
