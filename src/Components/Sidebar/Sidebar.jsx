import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routelinks } from "../../Routes/Routelinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for mobile view */}
      <button
        onClick={handleToggle}
        className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-full focus:outline-none transition-transform transform hover:scale-110"
      >
        {isOpen ? (
          <AiOutlineCloseSquare size={24} />
        ) : (
          <FaBarsStaggered size={24} />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-48 bg-card h-full flex flex-col items-center py-12 space-y-10 transition-transform transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          className="rounded-full w-24 h-24 border-4 border-primary"
          src="https://harnishdesign.net/demo/html/payyed/images/profile-thumb.jpg"
          alt="Profile"
        />
        <div className="flex flex-col gap-4 w-full px-4">
          {routelinks?.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-l-4 border-primary text-primary"
                    : "border-l-4 border-transparent text-black"
                } px-3 py-1 flex items-center gap-2 font-semibold transition-colors duration-200 hover:bg-primary hover:bg-opacity-25`
              }
            >
              <link.icon size={25} />
              {link.label}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
