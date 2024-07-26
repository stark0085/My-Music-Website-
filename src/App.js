import { React, useState, createContext } from "react";
import './App.css';
import Music from './Components/Music';
import Navbar from './Components/Navbar';
import Play from './Components/Play';

export const PlayContext = createContext();

const PlayContextProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [artist, setArtist] = useState(undefined);
  const [song, setSong] = useState(undefined);
  const [img, setImg] = useState(undefined);

  return (
    <PlayContext.Provider value={{ play, setPlay, artist, setArtist, song, setSong, img, setImg }}>
      {children}
    </PlayContext.Provider>
  );
};

function App() {
  return (
    <>
      <PlayContextProvider>
        <Navbar />
        <Music />
        <Play />
      </PlayContextProvider>
    </>
  );
}

export default App;
