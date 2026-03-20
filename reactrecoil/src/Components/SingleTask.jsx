import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { tasksAtom } from "../States/taskState";
import { useForm } from "react-hook-form";

const SingleTask = ({ task, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.taskName);
  const [newTaskCategory, setNewTaskCategory] = useState(task.category);
  const tasks = useAtomValue(tasksAtom);
  const setTasks = useSetAtom(tasksAtom);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addComment = (data) => {
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === task.id
          ? { ...task, comments: [...prevTask.comments, data.comment] }
          : prevTask,
      ),
    );
  };

  const deleteComment = (currentIndex) => {
        setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === task.id
          ? { ...task, comments: prevTask.comments.filter((comment, index) => index !== currentIndex) }
          : prevTask,
      ),
    );
  }

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleTaskUpdate = (e) => {
    setIsEditing(false);
    updateTask(task.id, newTaskName, newTaskCategory);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  };

  return (
    <div>
      {isEditing ? (
        <div className="editing-task">
          <input
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            autoFocus
            className="input-update"
          />
          <select
            onChange={(e) => setNewTaskCategory(e.currentTarget.value)}
            className="update-select"
          >
            <option value="">-- Choose Category --</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="design">Design</option>
          </select>
          <button onClick={handleTaskUpdate} className="update-button">
            Update Task
          </button>
        </div>
      ) : (
        <>
          <div className="single-task">
            <p className="task-text" onDoubleClick={handleDoubleClick}>
              {task.taskName}{" "}
              <span className="task-text">({task.category})</span>
            </p>

            <form className="comment-form" onSubmit={handleSubmit(addComment)}>
              <input
                type="text"
                placeholder="Add Comment"
                {...register("comment", { required: "You must enter task!" })}
                className="comment-input"
              ></input>
              <input
                type="submit"
                value="Add Comment"
                className="comment-button"
              />
            </form>
            {task.comments.map((comment, index) => (
              <span key={index} className="comment-span">
                <span>
                  Comment {index + 1}: {comment}
                </span>
                <button
                  onClick={() => deleteComment(index)}
                  className="delete-comment-btn"
                >
                  X
                </button>
              </span>
            ))}
            <button
              onClick={(e) => deleteTask(task.id)}
              className="delete-button"
            >
              Delete{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleTask;
