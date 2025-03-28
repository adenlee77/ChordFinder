import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";
import axios from "axios"

export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        axios.get(`/api/chords?value=${value}`).then(chords => {
          setResults(chords.data);
          console.log(chords.data)
        }
        )
    };


  return <div className = "input-wrapper">
    <FaSearch id = "search-icon"/>
    <input
        placeholder = "Type to search..."
        value = {input}
        onChange = {(e) => {
          setInput(e.target.value); 
          if (e.target.value != "") {
            fetchData(e.target.value);
          } else {
            setResults([])
          }
        }}/>
  </div>;
};
