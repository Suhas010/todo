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
  loading,
  markDone,
  handleEditClick
}) => {

const markDoneAction = (<CheckCircleOutlined onClick={() => markDone(id)} />);
  return (
    <Card
      style={{ maxWidth: 370, marginTop: 16 }}
      loading={loading}
      onClick={() => handleEditClick(id)}
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