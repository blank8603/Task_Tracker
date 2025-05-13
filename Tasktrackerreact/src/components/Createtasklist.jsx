import {React, useState } from "react";


import { useNavigate } from "react-router-dom";
import "../Styles/Createtasklist.css"


const CreateTasklist = () => {

    const [title,setTitle]=useState();
    const [description,setDescription] = useState();
    const navigate = useNavigate()
    function handleGoBack(){
        navigate("/")
    }
    async function handleClick() {
        // 1. Prepare the data
        const data = {
          title: title,
          description: description
        };
      
        try {
          // 2. Send to API
          const response = await fetch('your-api-endpoint', {
            method: 'POST', // or 'PUT' depending on your API
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          // 3. Handle response
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const result = await response.json();
          console.log('Success:', result);
          
          // Optional: Reset form or show success message
          // setTitle('');
          // setDescription('');
          
        } catch (error) {
          console.error('Error:', error);
          // Handle error (show error message to user)
        }
      }


  return (
    <div className="create-task-container">
      <div className="create-task-card">
        {/* Back Button */}
        <div className="header-row">
          <button className="back-button" onClick={handleGoBack}>
            ←
          </button>
          <h2 className="create-task-title">Create Task List</h2>
        </div>

        {/* Input Fields */}
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input  id="title" type="text" placeholder="A New Task List" onChange={(e)=>setTitle(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="This is a description."
            rows="4"
            onChange={(e)=>setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="submit-button" onClick={handleClick}>Create Task List</button>
      </div>
    </div>
  );
};

export default CreateTasklist;
