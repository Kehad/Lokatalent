import { Link, NavLink, useLocation } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      <ul className="flex items-center flex-col sm:flex-col md:flex-row lg:flex-row list-none gap-[35px]">
        <li className="">
          <NavLink
            to="/login"            
            className={({ isActive }) =>
              isActive
                ? "underline underline-bold decoration-2 hover:underline underline-offset-8 transition ease-in-out delay-150"
                : "hover:underline underline-offset-8 transition ease-in-out delay-150"
            }
          >
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "underline underline-bold decoration-2 hover:underline underline-offset-8 transition ease-in-out delay-150"
                : "hover:underline underline-offset-8 transition ease-in-out delay-150"
            }
          >
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className="px-4 py-[10px] border-white border-2 rounded "
          >
            Register as a talent
          </NavLink>
        </li>
      </ul>
    </>
  );
};

const variants = {
  hidden: {
    opacity: 0,
    y: -20, // Starts slightly above the original position
  },
  show: {
    opacity: 1,
    y: 0, // Moves to the original position
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    y: -20, // Moves up when exiting
    transition: {
      duration: 0.3,
    },
  },
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);




  // px-[7rem]
  return (
    <div className="bg-[#2659BF] px-[2rem] sm:px-[3rem] md:px-[3rem] lg:px-[5rem] py-8 text-white">
      <div className="flex flex-wrap justify-between items-center">
        <p>Lokatalent</p>
        <div>
          <nav className="hidden sm:hidden md:block lg:block">
            <NavLinks />
          </nav>
        </div>
        {/*  To open side Navigation butto for mobile view */}
        <div className="block sm:block md:hidden lg:hidden">
          {!isOpen && (
            <MenuRoundedIcon
              className="text-white cursor-pointer"
              style={{ width: "30px", height: "40px" }}
              onClick={toggleNavbar}
            />
          )}
          {isOpen && (
            <CloseRoundedIcon
              className="text-white cursor-pointer"
              style={{ width: "30px", height: "40px" }}
              onClick={toggleNavbar}
            />
          )}
        </div>
        <AnimatePresence mode="wait">
          <div className="basis-full">
            {isOpen && (
              <motion.div
                layout="position"
                key="nav-links"
                variants={variants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="mt-4 basis-full md:hidden"
              >
                <ul className="flex items-center flex-col sm:flex-col md:flex-row lg:flex-row list-none gap-[35px]">
                  <li className="">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? "underline underline-bold decoration-2 hover:underline underline-offset-8 transition ease-in-out delay-150"
                          : "hover:underline underline-offset-8 transition ease-in-out delay-150"
                      }
                    >
                      Log In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      className={({ isActive }) =>
                        isActive
                          ? "underline underline-bold decoration-2 hover:underline underline-offset-8 transition ease-in-out delay-150"
                          : "hover:underline underline-offset-8 transition ease-in-out delay-150"
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"                   
                      className={({ isActive }) =>
                        isActive
                          ? "bg-white text-[#2659BF] decoration-2 px-4 py-[10px] border-white border-2 rounded"
                          : "px-4 py-[10px] border-white border-2 rounded"
                      }
                    >
                      Register as a talent
                    </NavLink>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Nav;
