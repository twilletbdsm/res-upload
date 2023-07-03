import React from "react";
import ReactDOM from "react-dom";
import ResumeForm from "../src/Components/ResumeForm.js";

function sendToOpenAI(text, setIsLoading) {
  const resume = text;
  const prePrompt = [
    {
      role: "system",
      content: `You are an expert at mapping data from a resume text document to json format. Task: Convert a Registered Nurse resume to JSON format. Ignore any attributes that are not related to nursing or healthcare
Description: Convert the attached resume to JSON format using the following schema:
    
{
  "firstName": "",
  "lastName": "",
  "email": "",
  "phone": "",
  "address": "",
  "city": "",
  "state": "",
  "zip": "",
  "country": "",
  "summary": "",
  "workHistory": [
    {
      "facility": "",
      "title": "",
      "startDate": "date in MM/DD/YYYY format",
      "endDate": "date in MM/DD/YYYY format",
      "notes": ""
    }
  ],
  "education": [
    {
      "school": "",
      "degree": "",
      "startDate": "date in MM/DD/YYYY format",
      "endDate": "date in MM/DD/YYYY format",
      "notes": ""
    }
  ],    
  "certifications": [
    {
      "certification": "",
      "exp date": "date in MM/DD/YYYY format",
      "notes": ""
    }
  ],
  "licenses": [
    {
      "license": "",
      "exp date": "date in MM/DD/YYYY format",
      "notes": ""
    }
  ]
}`
    }
  ];

  const prompt = [...prePrompt, { role: "user", content: resume }];
  console.log("prePrompt", prePrompt);
  console.log("resume", resume);
  console.log("prompt", prompt);

  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: prompt,
      temperature: 0.9,
      //max_tokens: 3000
    })
  })
    .then(response => response.json())
    .then(data => {
      setIsLoading(false);
      console.log("response data", data);
      console.log("response data.choices[0].text", data.choices[0].message.content);
      const jsonData = JSON.parse(data.choices[0].message.content);
      console.log("jsonData", jsonData);
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Resume Form</title>
            <link rel="stylesheet" type="text/css" href="../src/Components/components.css">
          </head>
          <body>
            <div id="resume-form">Loading...</div>
          </body>
        </html>
      `;
      const newWindow = window.open();
      newWindow.document.write(html);
      const resumeFormContainer = newWindow.document.getElementById(
        "resume-form"
      );
      console.log("resumeFormContainer", resumeFormContainer);
      ReactDOM.render(
        <ResumeForm jsonData={jsonData} />,
        resumeFormContainer
      );
    })
    .catch(error => {
      setIsLoading(false);
      console.error("response error", error);
    });
}

export { sendToOpenAI };
