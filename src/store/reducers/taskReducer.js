const intialState = {
  counter: 0
};

const task = (state = intialState, {type, payload}) => {
  console.log(type, "@@@")
  switch(type) {
    case "ADD":
      return {
        ...state,
        counter: payload
      }
    case "SUB":
      return {
        ...state,
        counter: payload
      }
    case "RESET":
      return intialState;
    default:
      return state;
  }
}
export default task;