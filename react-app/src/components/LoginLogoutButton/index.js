import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import { logout } from "../../store/session";

function LoginLogout() {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");
  const [showForm, setShowForm] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("location", location);
    formData.append("caption", caption);

    const response = await fetch("/api/images/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("Picture added successfully");
    } else {
      console.error("Failed to add picture");
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="flex flex-col gap-4 m-4">
      <div className="flex gap-2">
        <button
          className="px-4 py-2 sm:w-1/2 md:w-30 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
          onClick={toggleForm}
        >
          Add Picture
        </button>
        <button
          className="px-4 py-2 bg-red-500 sm:w-1/2 md:w-30 text-white rounded hover:bg-red-700 transition duration-300"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed #cccccc",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <input {...getInputProps()} />
            {file ? (
              <p>{file.name}</p>
            ) : (
              <p>Drag 'n' drop an image here, or click to select one</p>
            )}
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption"
            className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            className=" w-full mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginLogout;
