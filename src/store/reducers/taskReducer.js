import DUMMY_TASKS, { ACTION_TYPE } from "../constants";
import { getSelectedTask } from "../../util/helper";

const intialState = {
  tasks: DUMMY_TASKS,
  modal: false,
  mode: false,
  taskId: undefined
};

const task = (state = intialState, { type, payload }) => {
  switch(type) {
    case ACTION_TYPE.ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.push(payload),
      };
    case ACTION_TYPE.UPDATE_TASK: {
      let task = getSelectedTask(payload.id);
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