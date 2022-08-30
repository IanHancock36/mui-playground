import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ErrorScreen from './pages/error-screen';
import MainPage from './pages/main-page';
import Slider from  './pages/slider'
export default function App() {
return (
  <MainPage />
  // <Slider/>
)
}
