import { useAtomValue } from "jotai";
import { useState } from "react";
import { tasksAtom, filteredTasksAtom } from "../States/taskState";
import { useSetAtom } from "jotai";
import SingleTask from "./SingleTask";

const Tasks = () => {
  const tasks = useAtomValue(tasksAtom);
  const setTasks = useSetAtom(tasksAtom);

  const filteredTasks = useAtomValue(filteredTasksAtom);

  const updateTask = (id, newName, newCategory) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, taskName: newName, category: newCategory }
          : task,
      ),
    );
  };

  return (
    <div className="tasks-wrapper">
      {filteredTasks.map((task) => {
        return <SingleTask key={task.id} task={task} updateTask={updateTask} />;
      })}
    </div>
  );
};
export default Tasks;
