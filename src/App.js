import React,{useRef,useState} from "react";
import './style.css';
import data from "./Data";
import Song from "./Components/Song";
import Player from "./Components/Player";
import Library from "./Components/Library";
function App() {
  const [songs,setSongs]= useState(data);
  const [currentSong,setCurrentSong]= useState(songs[0]);
  const [isplaying,setIsPlaying] = useState(true);
  const [songTimingm,setsongTiming]=useState({
    currentTime:null,
    duration:null
  });
  let audioRef= useRef("");
  function setTime(e){
    setsongTiming({
      currentTime:e.target.currentTime,
      duration:e.target.duration
      
    })
    if(e.target.currentTime>0){
      setLoading("loaded")
    
    }
    
  }
  const [loading,setLoading]=useState('')
  
  function songLoaded(e){
    setLoading("loading")
    if(e.target.duration){
      
    audioRef.current.play()
    setIsPlaying(false)
  }
  }
  
  
  return (
    <div className="app">
      
      <div>
        <Library audioRef={audioRef} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      </div>
     <div>
     <h1>Musica </h1>
     
     <Song currentSong={currentSong} audioRef={audioRef} /> 
      <Player loading={loading} setCurrentSong={setCurrentSong} songs={songs} setsongTiming={setsongTiming} songTimingm={songTimingm} isplaying={isplaying} setIsPlaying={setIsPlaying} currentSong={currentSong}  audioRef={audioRef} />
     </div>
     <audio  onTimeUpdate={(e)=>{setTime(e)}} onLoadedData={(e)=>{songLoaded(e)}} src={currentSong.audio} ref={audioRef} ></audio>
    </div>
  );
}

export default App;
