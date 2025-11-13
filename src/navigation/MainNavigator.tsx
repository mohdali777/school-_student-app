import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Authnavigator from "./Authnavigator";
import AppNavigator from "./Appnavigator";
export default function MainNavigator() {
  const isLogin = useSelector((state: RootState) => state.StudentAuth.login);
  return isLogin ? <AppNavigator /> : <Authnavigator />;
}