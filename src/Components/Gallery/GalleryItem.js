import { useState } from "react"

function GalleryItem() {
    //this toggles the simple and detailed view
    const [view, setView] = useState(false)
    
    return (
        <div onclick={(e) => setView(!view)} style={{display: 'inline-block'}}>
            <p>Gallery Item</p>
        </div>
    )
}




export default GalleryItem