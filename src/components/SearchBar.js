import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [inputValue, setInputValue] = useState(searchTerm);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSearchTerm(value);
  };

  return (
    <div className="search-bar">
      <FaSearch />
      <input
        type="text"
        placeholder="Search shows by name"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
