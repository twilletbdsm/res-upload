import React, { useState } from "react";
import "./components.css";

function ResumeForm({ jsonData }) {
  const [firstName, setFirstName] = useState(jsonData.firstName);
  const [lastName, setLastName] = useState(jsonData.lastName);
  const [email, setEmail] = useState(jsonData.email);
  const [phone, setPhone] = useState(jsonData.phone);
  const [address, setAddress] = useState(jsonData.address);
  const [city, setCity] = useState(jsonData.city);
  const [state, setState] = useState(jsonData.state);
  const [zip, setZip] = useState(jsonData.zip);
  const [country, setCountry] = useState(jsonData.country);
  const [summary, setSummary] = useState(jsonData.summary);
  const [workHistory, setWorkHistory] = useState(jsonData.workHistory);
  const [education, setEducation] = useState(jsonData.education);
  const [certifications, setCertifications] = useState(jsonData.certifications);
  const [licenses, setLicenses] = useState(jsonData.licenses);

  function handleFormSubmit(event) {
    event.preventDefault();
    // handle form submission logic here
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1.2rem'
  };

  const inputStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1.2rem',
    width: '100%',
    marginBottom: '1rem'
  };

  const textAreaStyle = {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1.2rem',
    width: '100%',
    height: '10rem',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    marginBottom: '1rem'
  };


  return (
    <div style={{ backgroundColor: '#e1f5fe', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Please verify that our AI kicks ass</h1>
      <form onSubmit={handleFormSubmit}>
        <label style={labelStyle}>
          First Name:
          <input type="text" style={inputStyle} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>

        <label style={labelStyle}>
          Last Name:
          <input type="text" style={inputStyle} value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>

        <label style={labelStyle}>
          Email:
          <input type="text" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label style={labelStyle}>
          Phone:
          <input type="text" style={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>

        <label style={labelStyle}>
          Address:
          <input type="text"       style={inputStyle}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
    
      <label style={labelStyle}>
        City:
        <input type="text" style={inputStyle} value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
    
      <label style={labelStyle}>
        State:
        <input type="text" style={inputStyle} value={state} onChange={(e) => setState(e.target.value)} />
      </label>
    
      <label style={labelStyle}>
        Zip:
        <input type="text" style={inputStyle} value={zip} onChange={(e) => setZip(e.target.value)} />
      </label>
    
      <label style={labelStyle}>
        Country:
        <input type="text" style={inputStyle} value={country} onChange={(e) => setCountry(e.target.value)} />
      </label>
    
      <label style={labelStyle}>
        Summary:
        <textarea style={textAreaStyle} value={summary} onChange={(e) => setSummary(e.target.value)} />
      </label>
    
      <label style={labelStyle}>Work History:</label>
    
      {workHistory.map((job, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}>
            Facility:
            <input
              type="text"
              style={inputStyle}
              value={job.facility}
              onChange={(e) => {
                const newWorkHistory = [...workHistory];
                newWorkHistory[index].facility = e.target.value;
                setWorkHistory(newWorkHistory);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Title:
            <input
              type="text"
              style={inputStyle}
              value={job.title}
              onChange={(e) => {
                const newWorkHistory = [...workHistory];
                newWorkHistory[index].title = e.target.value;
                setWorkHistory(newWorkHistory);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Start Date:
            <input
              type="text"
              style={inputStyle}
              value={job.startDate}
              onChange={(e) => {
                const newWorkHistory = [...workHistory];
                newWorkHistory[index].startDate = e.target.value;
                setWorkHistory(newWorkHistory);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            End Date:
            <input
              type="text"
              style={inputStyle}
              value={job.endDate}
              onChange={(e) => {
                const newWorkHistory = [...workHistory];
                newWorkHistory[index].endDate = e.target.value;
                setWorkHistory(newWorkHistory);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Notes:
            <textarea
              style={textAreaStyle}
              value={job.notes}
              onChange={(e) => {
                const newWorkHistory = [...workHistory];
                newWorkHistory[index].notes = e.target.value;
                setWorkHistory(newWorkHistory);
              }}
            />
          </label>
        </div>
      ))}
      <button style={buttonStyle} onClick={() => setWorkHistory([...workHistory, {}])}>
        Add Job
      </button>
    
      <label style={labelStyle}>Education:</label>
    
      {education.map((school, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}>
            School:
            <input
              type="text"
              style={inputStyle}
              value={          school.school}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].school = e.target.value;
                setEducation(newEducation);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Degree:
            <input
              type="text"
              style={inputStyle}
              value={school.degree}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].degree = e.target.value;
                setEducation(newEducation);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Start Date:
            <input
              type="text"
              style={inputStyle}
              value={school.startDate}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].startDate = e.target.value;
                setEducation(newEducation);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            End Date:
            <input
              type="text"
              style={inputStyle}
              value={school.endDate}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].endDate = e.target.value;
                setEducation(newEducation);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Notes:
            <textarea
              style={textAreaStyle}
              value={school.notes}
              onChange={(e) => {
                const newEducation = [...education];
                newEducation[index].notes = e.target.value;
                setEducation(newEducation);
              }}
            />
          </label>
        </div>
      ))}
      <button style={buttonStyle} onClick={() => setEducation([...education, {}])}>
        Add School
      </button>
    
      <label style={labelStyle}>Certifications:</label>
    
      {certifications.map((certification, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}>
            Certification:
            <input
              type="text"
              style={inputStyle}
              value={certification.certification}
              onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index].certification = e.target.value;
                setCertifications(newCertifications);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Expiration Date:
            <input
              type="text"
              style={inputStyle}
              value={certification['exp date']}
              onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index]['exp date'] = e.target.value;
                setCertifications(newCertifications);
              }}
            />
          </label>
    
          <label style={labelStyle}>
            Notes:
            <textarea
              style={textAreaStyle}
              value={certification.notes}
              onChange={(e) => {
                const newCertifications = [...certifications];
                newCertifications[index].notes = e.target.value;
                setCertifications(newCertifications);
              }}
            />
          </label>
        </div>
      ))}
      <button style={buttonStyle} onClick={() => setCertifications([...certifications, {}])}>
        Add Certification
      </button>
    
      <label style={labelStyle}>Licenses:</label>
    
      {licenses.map((license, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <label style={labelStyle}>
            License:
            <input
              type="text"
              style={inputStyle}
              value={license.license}
              onChange={(e) => {
                const newLicenses = [...licenses];
                newLicenses[index].license = e.target.value;
            setLicenses(newLicenses);
          }}
        />
      </label>

      <label style={labelStyle}>
        Expiration Date:
        <input
          type="text"
          style={inputStyle}
          value={license['exp date']}
          onChange={(e) => {
            const newLicenses = [...licenses];
            newLicenses[index]['exp date'] = e.target.value;
            setLicenses(newLicenses);
          }}
        />
      </label>

      <label style={labelStyle}>
        Notes:
        <textarea
          style={textAreaStyle}
          value={license.notes}
          onChange={(e) => {
            const newLicenses = [...licenses];
            newLicenses[index].notes = e.target.value;
            setLicenses(newLicenses);
          }}
        />
      </label>
    </div>
  ))}
  <button style={buttonStyle} onClick={() => setLicenses([...licenses, {}])}>
    Add License
  </button>

  <button style={submitStyle} type="submit">
    Submit
  </button>
</form>
</div>
);
}
const labelStyle = {
display: 'block',
marginBottom: '0.5rem',
fontWeight: 'bold',
fontSize: '1.2rem',
};

const inputStyle = {
display: 'block',
width: '100%',
padding: '0.5rem',
marginBottom: '1rem',
fontSize: '1rem',
borderRadius: '4px',
border: '1px solid #ccc',
};

const textAreaStyle = {
display: 'block',
width: '100%',
padding: '0.5rem',
marginBottom: '1rem',
fontSize: '1rem',
borderRadius: '4px',
border: '1px solid #ccc',
};

const buttonStyle = {
backgroundColor: '#4CAF50',
border: 'none',
color: 'white',
padding: '10px 20px',
textAlign: 'center',
textDecoration: 'none',
display: 'inline-block',
fontSize: '16px',
margin: '4px 2px',
cursor: 'pointer',
borderRadius: '4px',
};

const submitStyle = {
backgroundColor: '#4CAF50',
border: 'none',
color: 'white',
padding: '10px 20px',
textAlign: 'center',
textDecoration: 'none',
display: 'inline-block',
fontSize: '16px',
margin: '4px 2px',
cursor: 'pointer',
borderRadius: '4px',
marginTop: '1rem',
};

export default ResumeForm;
    
