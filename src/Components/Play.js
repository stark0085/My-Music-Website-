import React, { useState, useContext } from 'react'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import { PlayContext } from "../App";
import './Utilities.css'
import './Play.css'

export default function Play(props) {
  const { play } = useContext(PlayContext);
  const { artist } = useContext(PlayContext);
  const { song } = useContext(PlayContext);
  const { img } = useContext(PlayContext);

  const [playPause, setPlayPause] = useState(true);

  const togglePlayBtn = () => {
    setPlayPause(!playPause)
  }

  const nextSong = () => {

  }

  const previousSong = () => {

  }

  return (
    <>
      {play && <div className='flex align-center position-sticky playbar flex-column'>
        <div className="progressBar">
          <input type="range" id='myprogressBar' min={0} max={100} />
        </div>
        <div className='flex justify-space-between' style={{ color: 'white' }}>
          <div className="details">
            <span className='mx-1'><img src={img} alt="songimage" id='bottomImg' /></span>
            <div className='innerbox'>
              <span>{song}</span>
              <span> - {artist}</span>
            </div>
          </div>
          <div>
            <button className='playbtn' onClick={previousSong}><SkipPreviousRoundedIcon style={{ fontSize: '2.5rem' }} /></button>
            <button className='playbtn' onClick={togglePlayBtn}>{playPause ? <PauseOutlinedIcon style={{ fontSize: '3rem' }} /> : <PlayArrowRoundedIcon style={{ fontSize: '3rem' }} />}</button>
            <button className='playbtn' onClick={nextSong}><SkipNextRoundedIcon style={{ fontSize: '2.5rem' }} /></button>
          </div>
        </div>
      </div>
      }
    </>
  )
}
