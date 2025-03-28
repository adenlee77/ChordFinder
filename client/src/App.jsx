import { useState, useEffect } from 'react'
import guitar from './assets/guitar.svg'
import pick from './assets/guitar_pick.png'
import './App.css'
import axios from "axios";
import { SearchBar } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';

function App() {
  
const [results, setResults] = useState([]);



  return (
    <>
      <div>
        <a href="https://musescore.com/sheetmusic/guitar" target="_blank">
          <img src={pick} className="logo" alt="Vite logo" style={{ width: '150px', height: '165px' }}/>
        </a>
        <a href="https://www.fender.com/en/start" target="_blank">
          <img src={guitar} className="logo react" alt="React logo" style={{ width: '300px', height: '200px' }}/>
        </a>
      </div>
      <h1>ChordFinder</h1>
      <div className="search-bar-container">
        <SearchBar setResults = {setResults} />
        <SearchResultsList results = {results} />
        <div style = {{ fontSize: '30px'}}>Search for any Guitar Chord</div>
      </div>
      <p className="read-the-docs">
        Click on the pick and guitar logos to visit sheet music and guitars
      </p>
    </>
  )
}

export default App
