//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Dropzone from './Components/DragNdrop.js';
import FileUploader from './Components/FileUploader.js';
//import Resume from './Components/Resume';
//import ResumeForm from './Components/ResumeForm';
//import ProcessedData from './Components/ProcessedData.js';
//import ResumeForm from './Components/ResumeForm.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume Upload</h1>
        <FileUploader />
        <br />
        <br />
      </header>
      
    </div>
  );
}

export default App;
