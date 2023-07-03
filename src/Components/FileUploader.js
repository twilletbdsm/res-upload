import React, { useState } from "react";
import JSZip from "jszip";
import { DOMParser } from "xmldom";
import { sendToOpenAI } from "..//openAI-service";

function FileUploader() {
  const [fileText, setFileText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  async function handleFileUpload(event) {
    setIsLoading(true);
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = async (e) => {
      const zip = await JSZip.loadAsync(e.target.result);
      const doc = zip.file("word/document.xml");
      const xml = await doc.async("text");
      const parser = new DOMParser();
      const docXml = parser.parseFromString(xml, "text/xml");
      const paragraphs = docXml.getElementsByTagName("w:p");
      let text = "";
      for (let i = 0; i < paragraphs.length; i++) {
        const runs = paragraphs[i].getElementsByTagName("w:r");
        for (let j = 0; j < runs.length; j++) {
          const t = runs[j].getElementsByTagName("w:t")[0];
          if (t) {
            text += t.textContent;
          }
        }
        text += "\n";
      }
      setFileText(text);
      console.log(text);
      sendToOpenAI(text, setIsLoading);
    };
    fileReader.readAsArrayBuffer(file);
  }

  return (
    <div>
      <div>
        <input type="file" onChange={handleFileUpload} />
      </div>
      <br />
      <div>
        {isLoading && (
          <div className="spinner-container">
            <div className="spinner"></div>
            <div className="message">
              Our AI is so smart, it once cured a patient with a single line of
              code...
            </div>
          </div>
        )}
        {error && <p>Error: {error.message}</p>} 
      </div>
    </div>
  );
}

export default FileUploader;
