import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function BasicButtonExample() {
     const toggleStyle = {
       backgroundColor: "bg-red-500",
       border: "1px solid #ccc",
       width: "100%",
     };
  return (
    <DropdownButton
      className="bg-transparent bg-red-600"
      id="dropdown-basic-button"
      title="Dropdown butston"
    >
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;
