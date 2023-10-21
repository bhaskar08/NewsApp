import './App.css';
import React, {  useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(10);

    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <NavBar/>
        <Routes>
          <Route path="/" element={<News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize={9} country="in"  category="general" />} />
          <Route path="/business" element={<News apiKey={apiKey} setProgress={setProgress}  key="business" pageSize={9} country="in"  category="business" />} />
          <Route path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress}  key="entertainment" pageSize={9} country="in"  category="entertainment" />} />
          <Route path="/general" element={<News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize={9} country="in"  category="general" />} />
          <Route path="/health" element={<News apiKey={apiKey} setProgress={setProgress}  key="health" pageSize={9} country="in"  category="health" />} />
          <Route path="/science" element={<News apiKey={apiKey} setProgress={setProgress}  key="science" pageSize={9} country="in"  category="science" />} />
          <Route path="/sports" element={<News apiKey={apiKey} setProgress={setProgress}  key="sports" pageSize={9} country="in"  category="sports" />} />
          <Route path="/technology" element={<News apiKey={apiKey} setProgress={setProgress}  key="technology" pageSize={9} country="in"  category="technology" />} />
        </Routes>
        </BrowserRouter>
      </div>
    )

}


export default App