// src/ClassesScheduleTable.js
import React from 'react';
import { Table } from 'antd';
import './Classes.css';

const columns = [
  {
    title: 'Class',
    dataIndex: 'className',
    key: 'className',
    render: text => <strong>{text}</strong>,
  },
  {
    title: 'Days',
    dataIndex: 'days',
    key: 'days',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
];

const data = [
  {
    key: '1',
    className: 'Gentle Hatha Yoga',
    days: 'Monday & Thursday',
    time: '09:00 AM – 10:00 AM',
  },
  {
    key: '2',
    className: 'Vinyasa Flow',
    days: 'Monday, Tuesday, Thursday & Sunday',
    time: '06:30 PM – 07:30 PM',
  },
  {
    key: '3',
    className: 'Vinyasa Flow',
    days: 'Tuesday & Thursday',
    time: '07:00 PM – 08:00 PM',
  },
  {
    key: '4',
    className: 'Restorative Yoga',
    days: 'Saturday',
    time: '10:00 AM – 11:00 AM',
  },
  {
    key: '5',
    className: 'Restorative Yoga',
    days: 'Sunday',
    time: '06:30 PM – 07:30 PM',
  },
  {
    key: '6',
    className: 'Pre Natal Yoga',
    days: 'Monday & Thursday',
    time: '10:00 AM – 11:00 AM',
  },
  {
    key: '7',
    className: 'Post Natal Yoga',
    days: 'Monday, Tuesday & Thursday',
    time: '06:30 PM – 07:30 PM',
  },
  {
    key: '8',
    className: 'Kids Super Brain Yoga',
    days: 'Saturday',
    time: '11:00 AM – 12:00 PM',
  },
];

const columns2 = [
  {
   //title: 'Class',
    dataIndex: 'className',
    key: 'className',
    render: text => <strong>{text}</strong>,
  },
  {
    //title: 'Days',
    dataIndex: 'days',
    key: 'days',
  },
  {
    //title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
];

const data2 = [
  {
    key: '1',
    className: '08 classes a month',
    days: '5,800 LKR',
    time: 'Pay for 08 classes',
  },
  {
    key: '2',
    className: '12 classes a month',
    days: '12 classes a month',
    time: 'Pay for 12 classes',
  },
  {
    key: '3',
    className: '16 classes a month',
    days: '7,800 LKR',
    time: 'Pay for 16 classes',
  },
  {
    key: '4',
    className: 'Unlimited',
    days: '8,800 LKR',
    time: 'Pay for 20 classes',
  },
  {
    key: '5',
    className: 'Pay for 20 classes',
    days: '1,000 LKR',
    time: 'Pay and Book',
  },
 
];

const Classes = () => {
  return (
    <div className="schedule-table-container">
      <h2>Classes Schedule </h2>
      <Table columns={columns} dataSource={data} pagination={false} />
      <br></br>
      <br></br>

      <h2>Invest in your health  </h2>
      <Table columns={columns2} dataSource={data2} pagination={false} />
    </div>

    
    
  );
};

export default Classes;
