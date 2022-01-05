import React from "react";
import { Button } from 'antd';
import { useAppDispatch, useAppSelector } from '../models/store';
import { fetchXxx, selectGlobal } from '../models/global';

const Home = () => {
  const { user } = useAppSelector(selectGlobal);
  const dispatch = useAppDispatch();
  const toggleUser = async () => {
    await dispatch(fetchXxx());
  }
  return <div>
    <h1>Hello from project1, {user.name}</h1>
    <Button type="primary" onClick={toggleUser}>切换用户</Button>
  </div>
  
};

export default React.memo(Home);