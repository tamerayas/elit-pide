"use client"
import { Tabs } from 'antd';
import MenuCard from './MenuCard';

const tab1 = () => {
  return (
    [...Array(10)].map((x, i) =>
      <MenuCard key={i} />
    )
  )
};

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Tab 1`,
    children: tab1(),
  },
  {
    key: '2',
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];
const MainTabs = () => {
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange()} />;
}

export default MainTabs;