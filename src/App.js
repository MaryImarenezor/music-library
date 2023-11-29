import { useState, useEffect } from "react";
import Gallery from "./Components/Gallery/Gallery";
import SearchBar from "./Components/SearchBar";

function App() {

  const [search, setSearch] = useState("")
  const [message, setMessage] = useState("Search for Music")
  const [data, setData] = useState([])


  useEffect (() => {
    const fetchData = async () => {
      const url = "https://itunes.apple.com/search?term=the%20grateful%20dead"
      const response = await fetch(url)
      const data = await response.json()
      
      if(data.results) {
        setData(data.results)
      } else {
        setData([])
        setMessage("Not Found")
      }
    }

    fetchData()
  }, [search])
  
  return (
    <div>
      <SearchBar />
      {message}
      <Gallery />
    </div>
  )
}

export default App;



