import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; 


function DrowDownElement() {

  return (
    <div className="flex gap-2">
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
      <div className="bg-[#ede8e8] h-10 w-10 rounded flex items-center justify-center"><SearchOutlinedIcon className="text-black" /></div>
    </div>
  );
}

export default DrowDownElement;
