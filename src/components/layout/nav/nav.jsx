function Nav() {
  return (
    <div className="bg-[#2659BF] px-16 py-8">
      <div className="flex flex-rol justify-between items-center">
        <p>Lokatalent</p>
        <div>
          <nav>
            <ul className="flex list-none gap-[35px]">
              <li className="">
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Signup</a>
              </li>
              <li>
                <a
                  href="#"
                  className="p-4 border-white border-2 rounded "
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
