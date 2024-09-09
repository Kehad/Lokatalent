function Nav() {
  return (
    <div className="bg-[#2659BF] px-16 py-8">
      <div className="flex flex-rol justify-between items-center">
        <p>Lokatalent</p>
        <div>
          <nav>
            <ul className="flex list-none gap-[35px]">
              <li className="">
                <a href="#">Log In</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-4 py-[10px] border-white border-2 rounded "
                >
                  Register as a talent
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
