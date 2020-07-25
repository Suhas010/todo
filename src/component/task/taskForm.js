import React from 'react';
import moment from "moment";
import { Input, Col, DatePicker, Row, Select } from "antd";
import { TASK_PRIORITIES } from "./constants";

const TaskForm = ({
 task: {
  title,
  desc,
  priority,
  dueDate,
  state
 },
 handleChange
}) => {
  const getOptions = (options) => {
    return options.map(priority => (
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
          <Input
            name="title"
            placeholder="task title"
            value={title}
            onChange={({target: {value}})=>handleChange("title", value)}
            style={ {width: "100%"}}
          />
        </Col>
      </Row>
      <Row>
        <Col ls={24} sm={24} md={24}>
          <label>Description</label>
          <Input.TextArea
            name="desc"
            placeholder="describe task"
            value={desc}
            onChange={({target: {value}})=>handleChange("desc", value)}
            style={{width: "100%"}}/>
        </Col>
      </Row>
    </div>
  )
}

export default TaskForm;