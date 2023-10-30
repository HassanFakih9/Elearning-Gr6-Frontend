import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Dashboardteacher.css';

function Dashprofile() {
  const [user, setUser] = useState({});
  const [languages, setLanguages] = useState([]);
  const [languageName, setLanguageName] = useState([]);
  const [selectedLanguageId, setSelectedLanguageId] = useState(null);
  const [selectedLanguageName, setSelectedLanguageName] = useState("");
  const [defaultLanguageId, setDefaultLanguageId] = useState(17); // Set the default language ID to English (ID 17)

  const fetchUserData = () => {
    axios.get('http://localhost:5000/users/teacher')
      .then((response) => {
        console.log(response.data[0][0].id);
        setUser(response.data[0][0]);
        // Set the default language ID from the user's data
        setDefaultLanguageId(response.data[0][0].language_id);
        fetchlanguage(response.data[0][0].id);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateUserLanguage = (languageId) => {
    axios.put(`http://localhost:5000/users/teacher/${user.id}`, { language_id: languageId })
      .then((response) => {
        if (response.status === 201) {
          setSelectedLanguageId(languageId);
          // Save the selected language ID to localStorage
          localStorage.setItem('selectedLanguageId', languageId);
          // If the selected language is French (ID 18), set it as the default language
          if (languageId === 18) {
            setDefaultLanguageId(18);
          }
        } else {
          console.error("Language update failed");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchAllLanguages = () => {
    axios.get('http://localhost:5000/languages/getALL')
      .then((response) => {
        setLanguages(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchlanguage = (id) => {
    axios.get(`http://localhost:5000/languages/getbyTeacherId/${id}`)
    .then((response) => {
        console.log(response.data.data)
        setLanguageName(response?.data?.data[0]?.language_name);
        localStorage.setItem('language_id', response.data.data[0].language_id)
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchUserData();
    fetchAllLanguages();
    
  }, []);


  useEffect(() => {
    // Retrieve selected language ID from localStorage and set it in state
    const savedLanguageId = localStorage.getItem('selectedLanguageId');
    if (savedLanguageId) {
      setSelectedLanguageId(savedLanguageId);
    } else {
      // Set the default language ID initially
      setSelectedLanguageId(defaultLanguageId);
    }
  }, [defaultLanguageId]);

  useEffect(() => {
    if (selectedLanguageId) {
      const language = languages.find(language => language.language_id === selectedLanguageId);
      setSelectedLanguageName(language ? language.language_name : "");
    } else {
      setSelectedLanguageName("");
    }
  }, [selectedLanguageId, languages]);

  const handleSelectChange = (e) => {
    updateUserLanguage(e.target.value);
    setSelectedLanguageName(e.target.options[e.target.selectedIndex].text);
  };

  const handleSubmit = () => {
    // You can perform additional actions when the submit button is clicked here.
    // For example, you can show a confirmation message.
    alert(`You are now teaching ${selectedLanguageName}`);
  };

  return (
    
    <div>
      <div className="teachdash-maincontainer">
        <div className="main-dashboard-profile">
          <h3 className="role">Teacher</h3>
          <h4 className="profile">Profile</h4>
          <div className="line"></div>

          <div className ="profile-row">
            <p className="label-teach-profile">Name:</p>
            <p className="teach-name">{user.name}</p>
          </div>
          <div className="profile-row">
            <p className="label-teach-profile">Email:</p>
            <p className="teach-name">{user.email}</p>
          </div>
          <div className="profile-row">
            <p className="label-teach-profile">Language: {languageName}</p>
            <p className="teach-name">{selectedLanguageName}</p>
          </div>

          <select
            onChange={handleSelectChange}
            value={selectedLanguageId || ""}
          >
            {languages.map((language) => (
              <option key={language.language_id} value={language.language_id}>
                {language.language_name}
              </option>
            ))}
          </select>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Dashprofile;
