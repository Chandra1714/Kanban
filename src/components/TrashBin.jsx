import React from 'react';
import { useBoard } from '../BoardContext';
import { FiTrash2 } from 'react-icons/fi'; 

export default function TrashBin() {
  const { dispatch } = useBoard();

  const handleDrop = (e) => {
    e.preventDefault();
    const task = e.dataTransfer.getData("task");
    const sourcecol = e.dataTransfer.getData("sourcecol");
    if (task && sourcecol) {
      dispatch({
        type: "Delete-Task",
        payload: { sourcecol, task }
      });
    }
  }

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={`w-64 min-h-[320px] rounded-2xl p-4 
        border-2 border-dotted border-white/40
        backdrop-blur-xl bg-white/10
        shadow-[0_0_15px_rgba(255,255,255,0.2)]
        hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
        flex flex-col items-center justify-center
        transition-all duration-300 cursor-pointer`}
    >
      <FiTrash2 className="text-white text-6xl mb-4" />
      <h2 className="text-white font-semibold text-xl mb-2">
        Trash Bin
      </h2>
      <p className="text-white/60 text-center text-sm">
        Drag tasks here to delete
      </p>
    </div>
  );
}
