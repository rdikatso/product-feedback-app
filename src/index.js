import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import { DesktopSuggestions } from './components/DesktopSuggestions';
import { FeedbackDetails } from './components/FeedbackDetails';
import { NewFeedback } from './components/NewFeedback'
import { EditFeedback } from './components/EditFeedback'
import { RoadmapDetails } from './components/RoadmapDetails'




ReactDOM.render(
  <BrowserRouter>
    {/* <React.StrictMode>
      <App />
    </React.StrictMode> */}
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/DesktopSuggestions' element={<DesktopSuggestions />}></Route>
      <Route path='/FeedbackDetails' element={<FeedbackDetails />}></Route>
      <Route path='/NewFeedback' element={<NewFeedback/>}></Route>
      <Route path='/EditFeedback' element={<EditFeedback/>}></Route>
      <Route path='/RoadmapDetails' element={<RoadmapDetails/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

