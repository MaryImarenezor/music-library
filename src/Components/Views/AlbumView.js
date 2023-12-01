// These components will be making separate API calls from the app 
// component to serve specific data about a given album 
import { useState, useEffect } from 'react' 
import { useParams, Link} from 'react-router-dom'
import NavButton from '../NavButton'

function AlbumView() { 
    const [ albumData, setAlbumData ] = useState([]) 

    const { id } = useParams()


    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:4000/song/${id}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)

            const songs = data.results.filter(item => item.wrapperType === 'track')
            setAlbumData(songs)
        }

        fetchData()
    }, [id])

    const songDisplay = albumData.map(song => {
        return (
            <div key={song.trackId}>
                <Link to={`/song/${song.trackId}`}>
                    <p>{song.trackName}</p>
                </Link>
                
            </div>
        )
    })


    return ( 
    <div> 
        <NavButton />
        <p>Album Data Goes Here!</p>
        <p> ID: {id}</p>
        {songDisplay}
    </div> 
    ) 
} 


export default AlbumView