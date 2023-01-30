import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='w-full h-[55px] flex justify-between items-center px-4 bg-amber-600 text-white '> 
      <h2 className="text-[20px] text-white">Devmountain Eatery</h2>
      <nav>
        <Link to = "">
          <button className="px-5 hover:text-black">Home</button>
        </Link>
        <Link to="/newRecipe">
          <button className=" hover:text-black">Add Recipe</button>
        </Link>
      </nav>

      </div>
    </header>
  );
};

export default Header;
