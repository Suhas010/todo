import React from 'react';
import { Card } from "antd";
import Meta from 'antd/lib/card/Meta';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const TaskCard = ({
  title,
  desc,
  state
}) => (
  <Card
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
    style={{ width: 300, marginTop: 16 }}
  >
    <Card.Meta
      title={title}
      description={desc}
    >

    </Card.Meta>
  </Card>
);

export default TaskCard