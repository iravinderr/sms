import React from "react";
import { useState } from "react";

const StudentModal = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* Modal toggle */}
      <button
        data-modal-target="crud-modal"
        onClick={() => setToggle(!toggle)}
        data-modal-toggle="crud-modal"
        className="block justify-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>
      {/* Main modal */}
      {toggle &&<div>
        
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SUBMIT
              </button>
           
          
        
      </div>}
    </>
  );
};

export default StudentModal;
