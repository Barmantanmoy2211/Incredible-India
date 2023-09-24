// App.js
import React, { useState } from 'react';
import './styles.css'; // Import your custom styles
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeritageList from './components/HeritageList';
import Footer from './components/Footer';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // You can implement your search logic here and set the results in setSearchResults
    // For now, let's simulate some search results.
    const fakeResults = [
      { title: 'Heritage Item 1', description: 'Description of item 1' },
      { title: 'Heritage Item 2', description: 'Description of item 2' },
      // Add more items here
    ];
    setSearchResults(fakeResults);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <SearchBar onSearch={handleSearch} />
        <HeritageList results={searchResults} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
