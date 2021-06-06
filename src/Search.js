import React from "react";
// import SearchButton from "../../../Migracode/React/cyf-hotel-react/src/SearchButton";

const Search = () => {
  return (
    <div>
      <form onSubmit="">
        <label>Search here</label>
        <input
          type="text"
          id="searchMovie"
          className="inputField"
          placeholder="Enter movie name"
          value=""
          onChange=""
        />
        <button>Search</button>
        {/* <SearchButton /> */}
      </form>
    </div>
  );
};

export default Search;
