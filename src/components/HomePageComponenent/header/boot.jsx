import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import './boor.css';

function BasicButtonExample() {
     const toggleStyle = {
       backgroundColor: "bg-red-500",
       border: "1px solid #ccc",
       width: "100%",
     };
  return (
    <div className="">
    
    <div className="component-select">
      <select id="component-select" className="component-select">

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
    </div>
    </div>
  );
}

export default BasicButtonExample;

