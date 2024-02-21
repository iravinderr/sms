import { useState } from "react";
import React from "react";
import axios from "axios";
// import Uploadf from '../components/Uploadf';

// function handleUpload(){
//     if (!file) {
//         alert("No File Selected")
//         return;
//     }

// }

// onClick={handleUpload}

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
  // hover:bg-blue-800
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type="file" /> */}

        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="default_size"
        >
          Default size
        </label>
        <input
          onChange={handleChange}
          class="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="default_size"
          type="file"
        />

        <button
          type="button"
          class="text-white bg-custom-color my-3 mx-3 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Uploadf;
