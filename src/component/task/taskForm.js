import React from 'react';
import { Input, Col, DatePicker, Row, Select } from "antd";
import { TASK_PRIORITIES } from "./constants";

const TaskForm = () => {
  // const [state, setState] = useState({
  //   title:"",
  //   desc:"",
  // });
  const getOptions = () => {
    return TASK_PRIORITIES.map(priority => (
      <Select.Option value={priority} key={priority}>
        {priority}
      </Select.Option>
    ));
  }
  return (
    <div className="task-form">
      <Row>
        <Col ls={24} sm={24} md={24}>
          <label>Title</label>
          <Input name="title" placeholder="task title" onChange={()=>{}} style={ {width: "100%"}}/>
        </Col>
      </Row>
      <Row>
        <Col ls={24} sm={24} md={24}>
          <label>Description</label>
          <Input.TextArea name="desc" placeholder="describe task" style={{width: "100%"}}/>
        </Col>
      </Row>
      <Row>
        <Col lg={12} sm={24} md={12}>
          <label>Task Priority</label>
          <Select defaultValue="lucy" style={{ width: "100%" }} onChange={()=>{}}>
            {getOptions()}
          </Select>
        </Col>
        <Col>
        <label>Due Date</label>
          <DatePicker
            style={{ width: "100%"}}
          />
        </Col>
      </Row>
    </div>
  )
}

export default TaskForm;