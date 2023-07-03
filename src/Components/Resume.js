import React from "react";

function Resume({ jsonData }) {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zip,
    country,
    summary,
    workHistory,
    education,
    certifications,
    licenses,
  } = jsonData;

  return (
    <div>
      <h1>{`${firstName} ${lastName}`}</h1>
      <p>{`${address}, ${city}, ${state} ${zip}, ${country}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Phone: ${phone}`}</p>
      <h2>Summary</h2>
      <p>{summary}</p>
      <h2>Work History</h2>
      {workHistory.map((job, index) => (
        <div key={index}>
          <h3>{job.facility}</h3>
          <p>{`${job.startDate} - ${job.endDate}`}</p>
          <p>{job.title}</p>
          <p>{job.notes}</p>
        </div>
      ))}
      <h2>Education</h2>
      {education.map((degree, index) => (
        <div key={index}>
          <h3>{degree.school}</h3>
          <p>{`${degree.startDate} - ${degree.endDate}`}</p>
          <p>{degree.degree}</p>
          <p>{degree.notes}</p>
        </div>
      ))}
      <h2>Certifications</h2>
      {certifications.map((cert, index) => (
        <div key={index}>
          <h3>{cert.certification}</h3>
          <p>{`Expiration Date: ${cert.exp_date}`}</p>
          <p>{cert.notes}</p>
        </div>
      ))}
      <h2>Licenses</h2>
      {licenses.map((license, index) => (
        <div key={index}>
          <h3>{license.license}</h3>
          <p>{`Expiration Date: ${license.exp_date}`}</p>
          <p>{license.notes}</p>
        </div>
      ))}
    </div>
  );
}

export default Resume;
