import React from 'react'

const Song = ({currentSong}) => {
    return (
        <div className="song">
            <div className="song-container">
            <img src={currentSong.cover} alt={currentSong.title} />
            <div className='song-text'>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
            </div>
            </div>

        </div>
    )
}

export default Song
