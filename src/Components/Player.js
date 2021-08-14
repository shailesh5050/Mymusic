import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlay,faPause } from '@fortawesome/free-solid-svg-icons';
import loadingAni from './img/loadingAnimation.svg'
const Player = ({loading,currentSong,setCurrentSong,audioRef,setIsPlaying,isplaying,songTimingm,setsongTiming,songs}) => {
   
    function songPlay(){
        if(isplaying){
            if(audioRef.current.play()){
                
            }
            
            audioRef.current.play();
            setIsPlaying(false)
        }else{
            audioRef.current.pause();
            setIsPlaying(true)
        }
    }
    function updateTime(e){
        audioRef.current.currentTime=e.target.value;
        setsongTiming({...songTimingm,currentTime:e.target.value})
        
    }
    function getTime(time){
        if(!isNaN(time)){
            return Math.floor(time/60) +":"+("0" + Math.floor(time%60)).slice(-2);
        }else{
            return "0:00"
        }
    }
    //next prev 
    function playPrevSong(){
        let currentIndex=songs.findIndex((song)=>currentSong.id==song.id);
        let playIndexPrev=currentIndex;
        
        if(currentIndex<=0){
            playIndexPrev=songs.length-1;
            setCurrentSong(songs[playIndexPrev])
        }else{
            setCurrentSong(songs[playIndexPrev-1])
        }
        
    }
    function playNextSong(){
        let currentIndex=songs.findIndex((song)=>currentSong.id==song.id);
        let playIndexNext=currentIndex;
        
        if(currentIndex>songs.length-2){
            playIndexNext=0;
            setCurrentSong(songs[playIndexNext])
        }else{
            setCurrentSong(songs[playIndexNext+1])
        }
        
    }
    return (
        <div className="player">
          
            <div className="player-container">
           <div className='range-sec'>
           <p >{getTime(songTimingm.currentTime)}</p>
            <input type="range" onClick={(e)=>{updateTime(e)}} onChange={(e)=>{updateTime(e)}} min={0} value={songTimingm.currentTime} max={audioRef.current.duration} />
            <p>{getTime(audioRef.current.duration)}</p>
           </div>
           
            <div className="controls">
            <FontAwesomeIcon icon={faAngleLeft} size="2x" onClick={playPrevSong} />
            {loading=='loading' ? <img className="loadingImg" src={loadingAni} alt="loaing"  /> : <FontAwesomeIcon  onClick={songPlay} icon={isplaying ? faPlay : faPause}  size="2x" />}
            <FontAwesomeIcon onClick={playNextSong} icon={faAngleRight} size="2x" />
            </div>
            </div>
        </div>
    )
}

export default Player
