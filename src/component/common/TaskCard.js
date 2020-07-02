import React from 'react';
import { Card } from "antd";
const getDate = date => {
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}
const TaskCard = ({
  id,
  title,
  desc,
  state,
  createdAt,
  dueDate,
  loading
}) => (
  <Card
    actions={[
      <span style={state === "Compleated" ? {color: "green", fontWeight: 900} : {color: "red", fontWeight: 900}}>{state}</span>,
      <span style={{color: "green"}}>{getDate(createdAt)}</span>,
      <span style={{color: "red"}}>{getDate(dueDate)}</span>,
    ]}
    style={{ width: 300, marginTop: 16 }}
    loading={loading}
  >
  {console.log(loading, "######")}

    <Card.Meta
      title={title}
      description={desc}
    >

    </Card.Meta>
  </Card>
);

export default TaskCard