import React,{useState} from 'react'
import LibrarySong from './LibrarySong'
import menu from './img/menu.svg';
const Library = ({songs,setCurrentSong,currentSong,audioRef={audioRef}}) => {
    const [active, setActive] = useState('library');
    function closeLibrary(){
        if(active=='library'){
            setActive('libraryActive')
        }else{
            setActive('library')
        }
    }
    return (
        <div className="library-warpper">
            <img onClick={closeLibrary} src={menu} alt="" srcset="" className="menu" />
        <div className={`library ${active}`}>
            <h2>Library</h2>
            {
                songs.map((song)=>{
                   return <LibrarySong song={song} audioRef={audioRef} setCurrentSong={setCurrentSong} />
                })
            }
           
          

        </div>
        </div>
    )
}

export default Library
