import React, { useState } from "react";
import departmentsData from "./departmentData";

const AccordianResult = () => {
  const [openDepartment, setOpenDepartment] = useState(null);

  const toggleDepartment = (departmentName) => {
    setOpenDepartment(
      openDepartment === departmentName ? null : departmentName
    );
  };

  return (
    <div id="accordion-open" data-accordion="open">
      <h2>Departments</h2>
      {departmentsData.map((department, index) => (
        <div key={index}>
          <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
              <button
                onClick={() => toggleDepartment(department.departmentName)}
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                data-accordion-target="#accordion-open-body-1"
                aria-expanded="true"
                aria-controls="accordion-open-body-1"
              >
                <span class="flex items-center">
                  {department.departmentName}
                </span>
              </button>
            </h2>
            {openDepartment === department.departmentName && (
              <ul>
                 <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                {department.subjects.map((subject, subIndex) => (
                  <li class="mb-2 text-gray-500 dark:text-gray-400" key={subIndex}>{subject}</li>
                ))}
                </div>
              </ul>
            )}
            <div
              id="accordion-open-body-1"
              class="hidden"
              aria-labelledby="accordion-open-heading-1"
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
               
                <p class="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{" "}
                
    
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* {departmentsData.map((department, index) => (
        <div key={index}>
          <button onClick={() => toggleDepartment(department.departmentName)}>
            {department.departmentName}
          </button>
          {openDepartment === department.departmentName && (
            <ul>
              {department.subjects.map((subject, subIndex) => (
                <li key={subIndex}>{subject}</li>
              ))}
            </ul> */}
      {/* )} */}
      {/* </div> */}
      {/* ))} */}
    </div>
  );
};

export default AccordianResult;
