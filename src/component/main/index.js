import React from "react";
import { connect } from "react-redux";

const Main = ({ task, dispatchAction }) => {
  const { counter } = task;
  return (
    <>
      {counter}
      <hr/>
      <button onClick={()=> dispatchAction("ADD", counter+1)}>+</button><button onClick={() => dispatchAction("SUB", counter-1)}>-</button>
      <hr/>
      <button onClick={() => dispatchAction("RESET", {})}>R</button>
    </>
  );
}

const dispatchAction = (action, payload) => ({
  type: action,
  payload
});
const mapStateToProps = ({ task }) => ({
  task
});
const mapDispatchToProps = ({
  dispatchAction
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
