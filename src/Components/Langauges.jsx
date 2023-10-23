import React from 'react';
import '../CSS/languages.css';

function Languages({language_name, 	language_img}) {

  return (
    <div>
     
      <div className="language-box">
            <img src={language_img} className="language-img" alt={language_name} />
            <h2 className="language-name">{language_name}</h2>
            </div>
    </div>
  );
}

export default Languages;
