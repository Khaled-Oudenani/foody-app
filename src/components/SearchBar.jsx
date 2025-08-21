import { useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { useContext } from "react";
import "../styles/SearchBar.css";
// MUI
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setSearch } = useContext(SearchContext);
  const handleSearch = () => {
    setSearch(query);
  };
  return (
    <form
      className="search-bar"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <input
        type="text"
        placeholder="Search meals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
