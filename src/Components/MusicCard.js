import  React,{ useContext, useEffect} from "react";
import { PlayContext } from "../App";

function MusicCard(props) {
    const { setPlay } = useContext(PlayContext);
    const { setArtist } = useContext(PlayContext);
    const { setSong } = useContext(PlayContext);
    const { setImg } = useContext(PlayContext);
    
    const showPlayBar = ()=>{
        setPlay(true)
        setArtist(props.artist)
        setSong(props.title)
        setImg(props.imgUrl)
    }

    useEffect(() => {
        window.matchMedia("(max-width: 800px)").addEventListener('change', () => {
          Array.from(document.querySelectorAll('.btn')).forEach(element => {
            element.style.fontSize = '0.5rem'
          });
        })
    }, []);

    return (
            <div className="card border-white my-2 mx-1" style={{backgroundColor: 'rgba(28, 1, 34, 0.8)', color: '#f38890', borderRadius: '5px'}}>
                <img src={props.imgUrl} alt="..." style={{borderRadius: '5px', width:'19vw'}} />
                    <div className="card-body">
                        <h3 className="text-center">{props.title}</h3>
                        <p className="text-center">{props.artist}</p>
                        <div className='flex justify-center py-1'><button style={{padding: '0.2vw', backgroundColor: 'rgb(244, 50, 116)', color: 'whitesmoke', borderRadius: '2px'}} className="btn cursor-pointer" onClick={showPlayBar}>Play</button></div>
                    </div>
            </div>
    )
}

export default MusicCard
