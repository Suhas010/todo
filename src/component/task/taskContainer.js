import React, { useState } from 'react';
import { Tabs, Col, Row } from 'antd';
import { connect } from 'react-redux';
import { TASK_FILTER_CATERGORY, EDIT, ADD } from './constants';
import { DUMMY_TASKS, ACTION_TYPE } from '../../store/constants';
import TaskCard from '../common/TaskCard';
import { dispatchAction } from '../../store/actions';
import Modal from 'antd/lib/modal/Modal';
import TaskForm from './taskForm';
import { getStoredState } from 'redux-persist';
const { TabPane } = Tabs;

const TaskContainer = ({ tasks, modal, mode, dispatchAction, loading }) => {
const [state, setState] = useState({
  activeTab: "All"
});

  const isLoading = async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(false), ms);
    });
  }

  const getTasksCards = () => {
    let filteredTask = DUMMY_TASKS;
    const { activeTab } = state;
    if(activeTab !== "All") {
      filteredTask = filteredTask.filter(({state}) => state == activeTab);
      console.log(filteredTask.length,"!!")
    }
    return filteredTask.map(({ title, createdAt, desc, dueDate, id, state }) => (
      <Col sm={24} md={12} lg={6} span={1} key={id}>
        <TaskCard
          id={id}
          desc={desc}
          title={title}
          state={state}
          dueDate={dueDate}
          createdAt={createdAt}
          loading={false}
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
  }
  const getTaskModal = () => (
    <Modal
      title={mode ? EDIT : ADD}
      visible={modal}
      onOk={() => {}}
      onCancel={()=>dispatchAction(ACTION_TYPE.TOGGLE_MODAL, {modal: false, mode: true})}
    >
      <TaskForm />
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