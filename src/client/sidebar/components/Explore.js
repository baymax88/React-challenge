// TODO: allow user to add and remove filters
// TODO: allow user to choose dimension and text to match for each filter 
// TODO: use filters when pulling data
// TODO: improve the UI

import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import {DeleteOutlined, PlusCircleOutlined} from '@ant-design/icons'
import server from '../../utils/server';

const { serverFunctions } = server;
const { Option } = Select

const Filter = () => {
  return (
    <>
      <hr />
      <div>
        <Select allowClear style={{width: '100%'}}>
          <Option value="first_option">First Option</Option>
        </Select>
        <Input placeholder="filter match text" />
        <Button type="primary" shape="circle" icon={<DeleteOutlined/>} />
      </div>
    </>
  )
}

const Explore = () => {
  async function pullQuery() {
    try {
      serverFunctions.pullData();
    } catch (err) {
    }
  }

  return (
    <div>
      <h1>Aleph | Data Explorer</h1>
      <div className="flex-centered">
        <Filter />
        <hr />
        <Button 
          type="primary" 
          shape="round" 
          icon={<PlusCircleOutlined/>}
          style={{
            backgroundColor: '#3074D9',
            border: '#3074D9'
          }}
        >
          New Filter Group
        </Button>
        <hr />
        <Button
          onClick={pullQuery}
          type="primary"
          style={{
            backgroundColor: '#3074D9',
            border: '#3074D9',
            margin: '0px auto',
          }}
        >
          Pull Data
        </Button>
      </div>
    </div>
  );
};

export default Explore;
