import GalleryItem from "./GalleryItem"
//Gallery acts as a wrapper for GalleryItem
function Gallery({ data }) {
    const display = data.map(item => {
        return <GalleryItem key={item.trackId} item={item}/>
    })
    
    return (
        <div>
            {display}
        </div>
    )
}




export default Gallery