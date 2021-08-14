import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({songs,setCurrentSong,currentSong,audioRef={audioRef}}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            {
                songs.map((song)=>{
                   return <LibrarySong song={song} audioRef={audioRef} setCurrentSong={setCurrentSong} />
                })
            }
           
          

        </div>
    )
}

export default Library
