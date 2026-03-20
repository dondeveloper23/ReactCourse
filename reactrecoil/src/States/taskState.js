import {atom} from "jotai"
import { atomWithStorage } from "jotai/utils"

export const tasksAtom = atomWithStorage('tasks', [])
export const searchAtom = atom("");

export const filteredTasksAtom = atom((get) => {
  const tasks = get(tasksAtom);
  const search = get(searchAtom);

  return tasks.filter((task) => {

    return task.taskName.toLowerCase().startsWith(search.toLowerCase());
  });
});
