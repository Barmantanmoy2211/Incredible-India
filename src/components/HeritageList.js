// HeritageList.js
import React from 'react';

function HeritageList({ results }) {
  return (
    <div className="heritage-list">
      {results.map((item, index) => (
        <div key={index} className="heritage-item">
          {/* Display information about each heritage item */}
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HeritageList;
