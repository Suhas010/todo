import React from 'react';
import { Card } from "antd";
import moment from "moment";
import { EditOutlined, CheckCircleOutlined } from "@ant-design/icons";
const getDate = date => {
  return moment(date).format("D/M/YYYY");
}
const TaskCard = ({
  id,
  title,
  desc,
  state,
  createdAt,
  dueDate,
  loading,
  handleEditClick,
  markDone
}) => {
const actionItems = [
  <span style={state === "Compleated" ? {color: "green", fontWeight: 900} : {color: "red", fontWeight: 900}}>{state}</span>,
  <span style={{color: "green"}}>{getDate(createdAt)}</span>,
  <span style={{color: "red"}}>{getDate(dueDate)}</span>,
  <EditOutlined onClick={() => handleEditClick(id)}/>,
];
const markDoneAction = (<CheckCircleOutlined onClick={() => markDone(id)} />);
if(state === "Pending") actionItems.push(markDoneAction);
  return (
    <Card
      actions={actionItems}
      style={{ width: 370, marginTop: 16 }}
      loading={loading}
    >
      <Card.Meta
        title={title}
        description={desc}
      >
      </Card.Meta>
    </Card>
  );
}

export default TaskCard