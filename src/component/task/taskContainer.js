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
    if(!title) {
      notification.warning({title: "Warning", message: "Title should not be empty."});
    }
    if(!desc) {
      notification({title: "Warrning", message: "No description is provided"});
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
  };

  const handleModalClose = () => {
    dispatchAction(ACTION_TYPE.TOGGLE_MODAL, {modal: false, mode: !mode});
    setState({
      ...state,
      task: initialTask,
    });
  };

  const getTaskModal = () => (
    <Modal
      // title={mode ? EDIT : ADD}
      visible={modal}
      onOk={handleSave}
      onCancel={handleModalClose}
    >
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