import React from 'react';
import { Card } from "antd";
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const TaskCard = ({
  title,
  desc,
  state,
  loading
}) => (
  <Card
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
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