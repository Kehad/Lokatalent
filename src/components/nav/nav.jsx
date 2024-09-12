import { Link } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


function Nav() {
  function trueMenuHandler() { }
  // px-[7rem]
  return (
    <div className="bg-[#2659BF] px-[5rem] py-8 text-white">
      <div className="flex flex-row justify-between items-center">
        <p>Lokatalent</p>
        <div>
          <nav className="hidden sm:hidden md:block lg:block">
            <ul className="flex list-none gap-[35px]">
              <li className="">
                <Link
                  to="/login"
                  className="hover:underline underline-offset-8 transition transition-all transition ease-in-out delay-150"
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="hover:underline underline-offset-8 transition transition-all transition ease-in-out delay-150"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="px-4 py-[10px] border-white border-2 rounded "
                >
                  Register as a talent
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/*  To open side Navigation butto for mobile view */}
        <div className="sm:block md:hidden lg:hidden">
          <MenuRoundedIcon
            className="text-white cursor-pointer"
            style={{ width: "30px", height: "40px" }}
            onClick={trueMenuHandler}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Nav;
