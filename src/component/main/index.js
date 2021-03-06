import React from "react";
import { connect } from "react-redux";
import { DeleteOutlined, PlusCircleTwoTone } from '@ant-design/icons';
import TaskContainer from "../task/taskContainer";
import { Popconfirm } from "antd";
import { ACTION_TYPE } from "../../store/constants";
import { dispatchAction } from "../../store/actions/";

const Main = ({ dispatchAction }) => {
  return (
    <div className="main-container">
      <div className="title">
        <h1><span className="h1-title">Task</span></h1>
        <Popconfirm
          title="Are you sure to remove all task?"
          onConfirm={() => dispatchAction(ACTION_TYPE.RESET_TASK, {})}
          onCancel={() => {}}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined className="del"/>
        </Popconfirm>
      </div>
      <section id="main">
        <TaskContainer />
      </section>      
      <PlusCircleTwoTone  onClick={() => dispatchAction(ACTION_TYPE.TOGGLE_MODAL, {modal: true, mode: false})} className="add-task"/>
    </div>
  );
}

const mapStateToProps = (root) => {
 return root
};
const mapDispatchToProps = ({
  dispatchAction
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
