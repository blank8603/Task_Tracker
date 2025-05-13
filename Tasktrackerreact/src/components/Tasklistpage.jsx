import "../Styles/Tasklistpage.css";
import { useNavigate } from "react-router-dom";

const Tasklist = () => {
    const navigate = useNavigate();

    function handlecreatelist(){
        navigate('/new-task-list')
    }

  return (
    <div id="task-list">
      <h2>My Task Lists</h2>
      <button className="create-task-button" onClick={handlecreatelist}>
        <span>Create New Task List</span>
      </button>
    </div>
  );
};

export default Tasklist;
