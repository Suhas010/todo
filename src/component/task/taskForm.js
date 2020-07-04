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
      <Row>
        <Col sm={24} md={24} lg={24}>
          <label>Priority</label>
          <Select
            value={state}
            style={{ width: "100%" }}
            onChange={(e)=>handleChange("state", e)}
          >
            {getOptions(["Pending", "Compleated"])}
          </Select>
        </Col>
      </Row>
      <Row>
        <Col lg={12} sm={24} md={12}>
          <label>Task Priority</label>
          <Select
            value={priority}
            style={{ width: "100%" }}
            onChange={(e)=>handleChange("priority", e)}
          >
            {getOptions(TASK_PRIORITIES)}
          </Select>
        </Col>
        <Col>
        <label>Due Date</label>
          <DatePicker
            style={{ width: "100%"}}
            value={moment(dueDate)}
            onChange={(e) => handleChange("dueDate", e)}
          />
        </Col>
      </Row>
    </div>
  )
}

export default TaskForm;