import React, { useState } from 'react';
import { Tabs, Col, Row, notification } from 'antd';
import { connect } from 'react-redux';
import moment from "moment";
import { TASK_FILTER_CATERGORY, EDIT, ADD } from './constants';
import { ACTION_TYPE } from '../../store/constants';
import TaskCard from '../common/TaskCard';
import { dispatchAction } from '../../store/actions';
import Modal from 'antd/lib/modal/Modal';
import TaskForm from './taskForm';
import { createUUID, getSelectedTask } from '../../util/helper';
const { TabPane } = Tabs;
const initialTask = {
  title: "",
  desc: "",
  priority: "Medium",
  state: "Pending",
  dueDate: moment().add(5, "days")
};
const TaskContainer = ({ tasks, modal, mode, dispatchAction, loading }) => {
const [state, setState] = useState({
  activeTab: "All",
  task: initialTask,
  error: []
});

  const isLoading = async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(false), ms);
    });
  }

  const handleEditClick = taskId => {
    const task = getSelectedTask(taskId, tasks);
    setState({
      ...state,
      task,
    });
    dispatchAction(ACTION_TYPE.TOGGLE_MODAL, { modal: true, mode: true })
  }
  
  const markDone = id => {
    dispatchAction(ACTION_TYPE.CHANGE_STATE, {id: id, state: "Compleated"});
    notification.success({message: "Congratulations!!, You just compleated one task."})
  }

  const getTasksCards = () => {
    let filteredTask = tasks;
    const { activeTab } = state;
    if(activeTab !== "All") {
      filteredTask = filteredTask.filter(({state}) => state == activeTab);
    }
    return filteredTask.map(({ title, createdAt, desc, dueDate, id, state }, index) => (
      <Col sm={24} md={12} lg={7} span={1} key={id}>
        <TaskCard
          id={id}
          desc={desc}
          title={title}
          state={state}
          dueDate={dueDate}
          createdAt={createdAt}
          loading={false}
          handleEditClick={handleEditClick}
          markDone={markDone}
        />
      </Col>
    ))
  };
  
  const getTabsPane = () => {
    return TASK_FILTER_CATERGORY.map((type) => (
      <TabPane tab={type} key={type}>
        <Row>
          {getTasksCards(type)}
        </Row>
      </TabPane>
    ))
  };

  const handleChange = (key, value) => {
    setState({
      ...state,
      task: {
        ...state.task,
        [key]: value
      }
    });
  };

  const handleSave = () => {
    const { task : { title, desc, priority, dueDate, id }} = state;
    let error = [];
    
    if(!title || title.length < 10 || title.length > 140) {
      error.push("Error in title, Must contain more than 10 and less than 140 chars");
    }
    if(!desc ||  desc.length < 50 || desc.length > 500) {
      error.push("Description must contain more than 50 and less 500 chars");
    }
    if(error.length) {
      setState({
        ...state,
        error
      });
      return;
    }
    if(id) {
      dispatchAction(ACTION_TYPE.UPDATE_TASK, state.task);
      notification.success({title: "Success", message:"Task has been updated successfully.!!"});
    } else {
      let payload = {
        ...state.task,
        createdAt: moment(),
        id: createUUID()
      }
      dispatchAction(ACTION_TYPE.ADD_TASK, payload);
      notification.success({title: "Success", message:"A new task has been added successfully.!!"});
    }
    setState({
      ...state,
      error
    });
    // console.log(state.task)
  };

  const getErrors = () => {
    const { error } = state;
    return error.map(error => (
      <div style={{color: "red"}}>
        {error}
      </div>
    ));
  };

  const handleModalClose = () => {
    dispatchAction(ACTION_TYPE.TOGGLE_MODAL, {modal: false, mode: true});
    setState({
      ...state,
      task: initialTask,
      error: []
    });
  };

  const getTaskModal = () => (
    <Modal
      title={mode ? EDIT : ADD}
      visible={modal}
      onOk={handleSave}
      onCancel={handleModalClose}
    >
      {getErrors()}
      <TaskForm 
       task={state.task}
       handleChange={handleChange}
      />
    </Modal>
  );
  const { activeTab } = state;
  return (
    <div className="task-container">
      {modal && getTaskModal()}
      <Tabs defaultActiveKey={activeTab} type="card" size="small" centered={true} onChange={activeTab => setState({...state, activeTab})}>
        {getTabsPane()}
      </Tabs>
    </div>
  );
}

const mapStateToProps = ({ root }) => root;
const mapDispatchToProps = ({dispatchAction});
export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);