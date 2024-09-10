import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-[#2659BF] px-[7rem] py-8 text-white">
      <div className="flex flex-rol justify-between items-center">
        <p>Lokatalent</p>
        <div>
          <nav>
            <ul className="flex list-none gap-[35px]">
              <li className="">
                <Link to="/login" className="hover:underline underline-offset-8 transition transition-all transition ease-in-out delay-150" >Log In</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline underline-offset-8 transition transition-all transition ease-in-out delay-150" >Sign Up</Link>
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
      </div>
    </div>
  );
}

export default Nav;
