import React from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Search = ({searchInput, handleInput}) => {

  return (
    <div className="search-wrapper">
      <div className="search-flex">
        <SearchRoundedIcon className="search-icon" />
        <input placeholder="Search" className="search-input" value={searchInput} onChange={handleInput}/>
      </div> 
    </div>
  );
};

export default Search;
