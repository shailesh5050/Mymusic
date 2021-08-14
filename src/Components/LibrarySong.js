import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

const LibrarySong = ({song,setCurrentSong,audioRef}) => {
    function libraryPlay(){
        setCurrentSong(song)
        audioRef.current.play();
    }
    return (
        <div>
            <div className="librarySong" onClick={(e)=>{libraryPlay()}}>
                <img src={song.cover} alt="" />
                <div className="library-text">
                <h4>{song.name}</h4>
                <h5>{song.artist}</h5>
                </div>

            </div>  
        </div>
    )
}

export default LibrarySong
