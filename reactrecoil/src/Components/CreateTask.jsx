import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { searchAtom, tasksAtom } from "../States/taskState";
import { useForm } from "react-hook-form";

const CreateTask = () => {
  const tasks = useAtomValue(tasksAtom);
  const setTasks = useSetAtom(tasksAtom);
  const setSearchAtom = useSetAtom(searchAtom);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addTask = (data) => {
    console.log(data)
    const isDuplicate = tasks.some(
      (task) => task.taskName.toLowerCase() === data.task.toLowerCase(),
    );

    if (isDuplicate) {
      alert("You already have this task!");
      return;
    }

    setTasks([
      ...tasks,
      {
        taskName: data.task,
        category: data.category,
        id: crypto.randomUUID(),
        comments: []
      },
    ]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(addTask)} className="task-form">
        {errors.category && <p className="error-text">{errors.category.message}</p>}
        {errors.task && <p className="error-text">{errors.task.message}</p>}
        <input
          placeholder="Enter new task"
          {...register("task", { required: "You must enter task!" })}
          className="task-input"
        ></input>
        <select
          {...register("category", { required: "Please select a category!" })}
          className="task-select"
        >
          <option value="">-- Choose Category --</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="design">Design</option>
        </select>

        <input type="submit" value="Add Task" className="submit-button"/>
      </form>
      <input
        placeholder="Filter Tasks"
        onChange={(e) => setSearchAtom(e.currentTarget.value)}
        className="input-filteredTasksAtom"
      ></input>
    </div>
  );
};

export default CreateTask;
