import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[310px] bg-linear-to-r from-blue-800 to-indigo-900 text-7xl text-white font-extrabold flex  flex-col items-center justify-center text-center shadow-xl mb-6 border-b border-white/20">
      <h1 className="tracking-wider drop-shadow-lg">
        Smart Task Manager
      </h1>
      <h2 className="text-white text-xl mt-4 opacity-90 tracking-wide">
   "Small steps every day create big results."
</h2>
    </div>
  );
};

export default Header;
