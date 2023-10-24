import React, { useState, useEffect } from 'react';

function NewLanguageSelection({ userId }) {
  const [languages, setLanguages] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedLevelName, setSelectedLevelName] = useState('');
  const [enrolledLevels, setEnrolledLevels] = useState([]);
  const [lessons, setLessons] = useState([]);

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

  // Fetch enrolled levels when userId changes
  useEffect(() => {
    if (userId && selectedLanguage) {
      // Fetch enrolled levels for the selected language
      fetch(`http://localhost:5000/students/enrolled-levels?userId=${userId}&language_id=${selectedLanguage}`)
        .then((response) => response.json())
        .then((data) => {
          setEnrolledLevels(data);
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching enrolled levels:', error);
        });
    }
  }, [userId, selectedLanguage]);
  


const handleLanguageChange = (event) => {
    const selectedLanguageId = event.target.value;
    setSelectedLanguage(selectedLanguageId);


};
  const handleLevelChange = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setSelectedLevel(event.target.value);
    setSelectedLevelName(selectedOption.text);
  };



const handleStartLearning = () => {

    fetch(`http://localhost:5000/students/lessons?language=${selectedLanguage}&level=${selectedLevelName}`)
        .then((response) => response.json())
        .then((data) => {
            setLessons(data);
        })
        .catch((error) => {
            console.error('Error fetching lessons:', error);
        });
};
  return (
    <div>
      <h2>Language and Level Selection</h2>
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
      <select id="level" name="level" value={selectedLevel} onChange={handleLevelChange}>
        <option value="">Select a Level</option>
        {enrolledLevels.map((level) => (
          <option key={level.level_id} value={level.level_name}>
            {level.level_name}
          </option>
        ))}
      </select>
      <button onClick={handleStartLearning}>Start Learning</button>
      {lessons.length > 0 && (
        <div>
          <h3>Available Lessons:</h3>
          <ul>
            {lessons.map((lesson) => (
              <li key={lesson.lesson_id}>
                <h4>{lesson.lesson_name}</h4>
                <p>{lesson.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NewLanguageSelection;
