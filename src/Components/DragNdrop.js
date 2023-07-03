import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { processResume } from './openai-api';
//import { animation } from './animation';
import ProcessedData from './ProcessedData';

const Dropzone = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [workHistory, setWorkHistory] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async () => {
    setLoading(true);
    const data = await processResume(file);
    setWorkHistory(data);
    setLoading(false);
  };

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the file here ...</p>
        ) : (
          <p>Drag 'n' drop your resume here, or click to select file</p>
        )}
        {file && (
          <div>
            <p>{file.name}</p>
            <button onClick={handleSubmit}>Extract Work History</button>
          </div>
        )}
        {loading && <p>Loading...</p>}
      </div>
      {workHistory && <ProcessedData data={workHistory} />}
    </div>
  );
};

export default Dropzone;






// import React, { useState } from 'react';
// import  from 'textract';

// const DragAndDrop = () => {
//   const [files, setFiles] = useState([]);
//   const [isHovered, setIsHovered] = useState(false);
//   const [textData, setTextData] = useState(null);

//   const handleDrop = async (e) => {
//     e.preventDefault();
//     const droppedFiles = e.dataTransfer.files;
//     setFiles(droppedFiles);
//     // process the dropped files as needed

//     try {
//       // Assume only one file was dropped
//       const [file] = droppedFiles;
//       const fileText = await textract.fromFileWithPath(file.path);
  
//       // Convert the text data to JSON
//       setTextData(JSON.stringify(fileText));
//     } catch (error) {
//       console.error(error);
//     }
  
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDragEnter = () => {
//     setIsHovered(true);
//   };

//   const handleDragLeave = () => {
//     setIsHovered(false);
//   };

 

// return (
    
//     <div
    
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         width: '100vw',
//       }}
      
//     >
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//         <p style={{ textAlign: 'center', color: 'gray' }}>Drop your resume here</p>
//       <div
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//         onDragEnter={handleDragEnter}
//         onDragLeave={handleDragLeave}
//         style={{
//             width: '75%',
//             height: '80%',
//             border: '1px solid black',
//             textAlign: 'center',
//             color: 'gray',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: isHovered ? 'lightgray' : 'white',
//           }}
          
//       >
//         {files.length === 0 ? 'Drop your files here' : 'Thank you!'}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default DragAndDrop;