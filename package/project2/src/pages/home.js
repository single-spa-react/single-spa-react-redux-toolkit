import React from "react";
import { useAppSelector } from '../models/store';
import { selectGlobal } from '../models/global';
const Home = () => {
  const { user } = useAppSelector(selectGlobal);
  return <h1>Hello from project2, {user.project2name}</h1>
};

export default React.memo(Home);