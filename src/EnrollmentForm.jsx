import React, { useState, useEffect } from 'react';

function EnrollmentForm({ userId }) {
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  useEffect(() => {
    // Fetch available languages and populate the language dropdown
    fetch('http://localhost:5000/students/get-languages')
      .then((response) => response.json())
      .then((data) => {
        setLanguages(data.languages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguageId = event.target.value;
    setSelectedLanguage(selectedLanguageId);

    // Fetch available levels for the selected language and populate the level dropdown
    fetch(`http://localhost:5000/students/get-levels?language_id=${selectedLanguageId}`)
      .then((response) => response.json())
      .then((data) => {
        setLevels(data.levels);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEnroll = () => {
    const studentId = userId/* Get the student's user ID */
    // Send a POST request to the backend API to enroll the student
    fetch('http://localhost:5000/students/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentId, levelId: selectedLevel }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        // Handle success or error messages as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <label htmlFor="language">Select Language:</label>
      <select id="language" name="language" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select a Language</option>
        {languages.map((language) => (
          <option key={language.language_id} value={language.language_id}>
            {language.language_name}
          </option>
        ))}
      </select>

      <label htmlFor="level">Select Level:</label>
      <select id="level" name="level" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
        <option value="">Select a Level</option>
        {levels.map((level) => (
          <option key={level.level_id} value={level.level_id}>
            {level.level_name}
          </option>
        ))}
      </select>

      <button type="button" onClick={handleEnroll} disabled={!selectedLanguage || !selectedLevel}>
        Enroll
      </button>
    </div>
  );
}

export default EnrollmentForm;
