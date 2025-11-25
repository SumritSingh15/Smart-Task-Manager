import React, { useEffect, useState } from "react";

const Body = () => {
  const [Task, setTask] = useState("");
  const [Priority, setPriority] = useState("Easy");
  const [Category, setCategory] = useState("General");
  const [tasklist, settasklist] = useState([]);

  const newTask = {
    text: Task.trim(),
    priority: Priority,
    category: Category,
    completed: false,
  };

  function HandleAdd() {
    if (Task.trim() === "") return;
    settasklist([...tasklist, newTask]);
    setTask("");
  }

  function HandleDelete(index) {
    settasklist(tasklist.filter((_, i) => i !== index));
  }

  function togglecompleted(index) {
    settasklist(
      tasklist.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  useEffect(() => {
    const storedtask = JSON.parse(localStorage.getItem("Task"));
    if (storedtask) settasklist(storedtask);
  }, []);

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="flex flex-col p-4 sm:p-10">

      {/* 🔹 Input Box Section — matched with Header's glass-black style */}
      <div className="
        w-full 
        bg-black/40 backdrop-blur-xl 
        border border-white/10 
        rounded-3xl 
        flex flex-col md:flex-row justify-between items-center 
        p-5 shadow-2xl
      ">
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input
            type="text"
            placeholder="Enter your task..."
            value={Task}
            className="
              w-full sm:w-[500px] 
              bg-black/30 backdrop-blur-lg
              border border-white/10 
              text-white placeholder-gray-300 
              p-3 rounded-2xl 
              focus:outline-none focus:ring-2 focus:ring-indigo-400
              transition
            "
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            className="
              rounded-2xl px-6 py-3 
              bg-indigo-600/80 hover:bg-indigo-500 
              text-white font-semibold 
              shadow-xl transition transform hover:scale-[1.03]
            "
            onClick={HandleAdd}
          >
            Add Task
          </button>
        </div>

        {/* Dropdowns */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <select
            className="
              bg-black/30 backdrop-blur-lg 
              border border-white/10 
              text-white 
              p-2 rounded-2xl cursor-pointer shadow 
              transition hover:bg-black/40
            "
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <select
            className="
              bg-black/30 backdrop-blur-lg 
              border border-white/10 
              text-white 
              p-2 rounded-2xl cursor-pointer shadow 
              transition hover:bg-black/40
            "
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>General</option>
            <option>High</option>
            <option>Medium</option>
          </select>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white text-5xl font-extrabold mt-10 mb-6 text-center tracking-wide">
        Your Tasks
      </h1>

      {/* Task List */}
      <ul className="space-y-6">
        {tasklist.map((item, index) => (
          <li
            key={index}
            className="
              bg-black/40 backdrop-blur-xl 
              border border-white/10 
              rounded-3xl p-5 
              shadow-2xl flex justify-between items-center 
              transition hover:scale-[1.02]
            "
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pl-2">
              <h2
                className={`text-xl font-bold tracking-wide ${
                  item.completed
                    ? "line-through text-gray-400"
                    : "text-white"
                }`}
              >
                {item.text}
              </h2>

              <span className="px-3 py-1 text-sm rounded-xl bg-indigo-600/50 text-white font-medium shadow-md">
                {item.priority}
              </span>

              <span className="px-3 py-1 text-sm rounded-xl bg-emerald-600/50 text-white font-medium shadow-md">
                {item.category}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                className="
                  text-white bg-emerald-600/80 hover:bg-emerald-500 
                  px-4 py-2 rounded-xl 
                  shadow-md transition font-semibold
                "
                onClick={() => togglecompleted(index)}
              >
                {item.completed ? "Undo" : "Done"}
              </button>

              <button
                className="
                  text-white bg-red-600/80 hover:bg-red-500 
                  px-4 py-2 rounded-xl 
                  shadow-md transition font-semibold
                "
                onClick={() => HandleDelete(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
