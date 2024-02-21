import { useState } from "react";
import React from "react";
import axios from "axios";
// import Uploadf from '../components/Uploadf';


const Uploadf = () => {
  const [file, setFile] = useState(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const url = "http://localhost:3000/uploadFile"; //api end point
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }
 



  return (
    <div>
      <form onSubmit={handleSubmit}>


        <div className="flex items-center justify-center w-100vh h-50">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF PDF JPEG (MAX. 800x400px)</p>
            </div>
            <input onChange={handleChange} id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>

        <button
                      className="bg-custom-color btn-style text-white active:scale-95 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      // type="submit"
                    
                    >
                     
                      Submit
                    </button>
    
         </form >
            </div > )}


{/* <form onSubmit={handleSubmit}>
        <input type="file" />

        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="default_size"
        >
          Default size
        </label>
        <input
          onChange={handleChange}
          className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="default_size"
          type="file"
        />

        <button
          type="button"
          className="text-white bg-custom-color  mx-3 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}; */}

export default Uploadf;
