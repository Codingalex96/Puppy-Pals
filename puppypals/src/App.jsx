import { useState } from 'react'
import {puppyList} from './data.js';
import './App.css';


function App() {
  const [featuredPuppy, setFeaturedPuppy] = useState(null);

  const handlePuppyClick = (puppy) => {
    setFeaturedPuppy(puppy);
  };

  return (
    <div className="app-container">
      <h1>Puppy List</h1>
      
      <div className="puppy-list">
        {puppyList.map((puppy) => (
          <p 
            key={puppy.id} 
            className="puppy-name" 
            onClick={() => handlePuppyClick(puppy)}
          >
            {puppy.name}
          </p>
        ))}
      </div>

      {featuredPuppy && (
        <div className="featured-puppy">
          <h2>Featured Puppy</h2>
          <p><strong>Name:</strong> {featuredPuppy.name}</p>
          <p><strong>Email:</strong> {featuredPuppy.email}</p>
          <p><strong>Age:</strong> {featuredPuppy.age} years old</p>
          <p><strong>Cuteness:</strong> {featuredPuppy.isCute ? "Very cute" : "Not cute"}</p>
          <p><strong>Tricks:</strong></p>
          {featuredPuppy.tricks.length > 0 ? (
            <ul>
              {featuredPuppy.tricks.map((trick) => (
                <li key={trick.id}>{trick.title}</li>
              ))}
            </ul>
          ) : (
            <p>No tricks available</p>
          )}
        </div>
      )}

      <p className="read-the-docs">
        Click on a puppy name to see details!
      </p>
    </div>
  );
}

export default App;
