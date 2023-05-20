import React from "react";

const Header = () => {
  return (
    <header className="min-h-header bg-header-black">
      <div className="container mx-auto flex items-center justify-center">
        <h2 className="text-white text-5xl py-4">
          <span>Black</span>
          <span className="bg-white text-black">Jack</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
