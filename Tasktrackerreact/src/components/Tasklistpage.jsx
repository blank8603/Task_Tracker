import "../Styles/Tasklistpage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import axios from "axios";

const Tasklist = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Simulate fetching data
  //   const fetchDummyData = () => {
  //     // Simulated dummy data
  //     const dummyData = [
  //       { id: 1, title: "Task Progress 1", progress: 70 },
  //       { id: 2, title: "Task Progress 2", progress: 50 },
  //       { id: 3, title: "Task Progress 3", progress: 30 },
  //       { id: 3, title: "Task Progress 3", progress: 30 },
  //       { id: 3, title: "Task Progress 3", progress: 30 },
  //       { id: 3, title: "Task Progress 3", progress: 30 },
  //       { id: 3, title: "Task Progress 3", progress: 30 },
  //       { id: 3, title: "Task Progress 3", progress: 30 },
  //       { id: 3, title: "Task Progress 3", progress: 30 },
  //     ];
  //     setData(dummyData);
  //   };

  //   // Simulate a delay for the fetch (e.g., 1 second)
  //   const timeout = setTimeout(fetchDummyData, 1000);

  //   // Cleanup timeout on component unmount
  //   return () => clearTimeout(timeout);
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/task-lists"); // Replace with your API
        const result = await response.json();

        // Validate and set data if it's an array with valid objects
        if (
          Array.isArray(result) &&
          result.every((item) => item.title && item.progress !== undefined)
        ) {
          const formattedData = result.map((item) => ({
            heading: item.title,
            progress: item.progress,
          }));
          setData(formattedData); // Set the array of cards
        } else {
          setData([]); // Empty array for invalid or empty results
        }
      } catch (error) {
        console.error("Error fetching API data:", error);
        setData([]); // Reset to an empty array on error
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Fetch every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handlecreatelist = () => {
    navigate("/new-task-list");
  };

  return (
    <div id="task-list">
      <h2>My Task Lists</h2>
      <button className="create-task-button" onClick={handlecreatelist}>
        <span>Create New Task List</span>
      </button>
      <div id="containerStyle">
        {data.length > 0 ? (
          data.map((task) => (
            <div key={task.id} className="cardStyle">
              <div className="headerStyle">
                <Menu className="menuIconStyle" /> {/* Hamburger Icon */}
                <h2 className="headingStyle">{task.title}</h2>
              </div>
              <div className="progressBarContainerStyle">
                <div
                  className="progressBarStyle"
                  style={{ width: `${task.progress}%` }}
                ></div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p> // Optional placeholder
        )}
      </div>
    </div>
  );
};

export default Tasklist;
