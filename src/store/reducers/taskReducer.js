import DUMMY_TASKS, { ACTION_TYPE } from "../constants";
import { getIndexOfSelectedTask } from "../../util/helper";

const intialState = {
  tasks: DUMMY_TASKS,
  modal: false,
  mode: false,
  taskId: undefined
};

const task = (state = intialState, { type, payload }) => {
  switch(type) {
    case ACTION_TYPE.ADD_TASK:
      let tasks = [...state.tasks];
      tasks.push(payload);
      return {
        ...state,
        modal: false,
        tasks,
      };
    case ACTION_TYPE.UPDATE_TASK: {
      let task = getIndexOfSelectedTask(payload.id, state.tasks);
      let tasks = [...state.tasks];
      tasks[task] = {
        ...payload
      };
      return {
        ...state,
        tasks,
        modal: false,
      };
    }
    case ACTION_TYPE.CHANGE_STATE: {
      let task = getIndexOfSelectedTask(payload.id, state.tasks);
      let tasks = [...state.tasks];
      tasks[task] = {
        ...tasks[task],
        ...payload
      };
      return {
        ...state,
        tasks
      };
    }

    case ACTION_TYPE.TOGGLE_MODAL:
      return {
        ...state,
        ...payload
      };
    case ACTION_TYPE.RESET_TASK:
      return intialState;
    default:
      return state;
  }
}
export default task;