import React from "react";

const Header = () => {
  return (
    <div className="
      w-full h-[310px] 
      bg-black/40 backdrop-blur-2xl
      border border-white/10 
      shadow-2xl
      rounded-b-3xl
      text-7xl text-white font-extrabold 
      flex flex-col items-center justify-center text-center
      mb-6
    ">
      
      <h1 className="tracking-wider drop-shadow-xl">
        Smart Task Manager
      </h1>

      {/* Glass Black Quote Card */}
      <div className="
        mt-4 px-6 py-3 
        bg-black/50 backdrop-blur-xl
        border border-white/10 
        shadow-xl 
        rounded-2xl
      ">
        <h2 className="text-white text-xl opacity-95 tracking-wide">
          "Small steps every day create big results."
        </h2>
      </div>

    </div>
  );
};

export default Header;
