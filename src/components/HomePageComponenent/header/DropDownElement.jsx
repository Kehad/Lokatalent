import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import "./boor.css";

function DrowDownElement() {
  const toggleStyle = {
    backgroundColor: "bg-red-500",
    border: "1px solid #ccc",
    width: "100%",
  };
  return (
    <div className="flex">
      <div className="relative inline-block w-[20rem]">
        <select
          id="component-select"
          className="appearance-none w-[20rem] h-10 px-2 pr-8 text-lg bg-transparent border-2 border-white rounded-md focus:outline-none"
        >
          <option value="" selected>
            What service do you need
          </option>
          <option value="" selected>
            Student
          </option>
          <option value="" selected>
            Teacher
          </option>
        </select>

        <div className="pointer-events-none absolute top-1/2 right-2 transform -translate-y-1/2">
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DrowDownElement;
