import { DUMMY_TASKS, ACTION_TYPE } from "../constants";

const intialState = {
  tasks: DUMMY_TASKS,
  modal: false,
  mode: false
};

const task = (state = intialState, { type, payload }) => {
  console.log(type)
  switch(type) {
    case ACTION_TYPE.ADD_TASK:
      return {
        ...state,
      };
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